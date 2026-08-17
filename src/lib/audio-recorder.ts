// Gravação de microfone com Web Audio → WAV 16 kHz mono (decodável em qualquer navegador).

function downsample(input: Float32Array, from: number, to: number): Float32Array {
  if (to >= from) return input;
  const ratio = from / to;
  const length = Math.floor(input.length / ratio);
  const out = new Float32Array(length);
  for (let i = 0; i < length; i++) {
    const start = Math.floor(i * ratio);
    const end = Math.min(Math.floor((i + 1) * ratio), input.length);
    let sum = 0;
    for (let j = start; j < end; j++) sum += input[j] ?? 0;
    out[i] = sum / Math.max(1, end - start);
  }
  return out;
}

export function encodeWav(chunks: Float32Array[], sampleRate: number, targetRate = 16000): Blob {
  const total = chunks.reduce((acc, c) => acc + c.length, 0);
  const merged = new Float32Array(total);
  let offset = 0;
  for (const c of chunks) {
    merged.set(c, offset);
    offset += c.length;
  }
  const samples = downsample(merged, sampleRate, targetRate);
  const rate = Math.min(sampleRate, targetRate);

  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);
  const writeString = (pos: number, str: string) => {
    for (let i = 0; i < str.length; i++) view.setUint8(pos + i, str.charCodeAt(i));
  };
  writeString(0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, rate, true);
  view.setUint32(28, rate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(36, "data");
  view.setUint32(40, samples.length * 2, true);
  let pos = 44;
  for (const sample of samples) {
    const clamped = Math.max(-1, Math.min(1, sample));
    view.setInt16(pos, clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff, true);
    pos += 2;
  }
  return new Blob([buffer], { type: "audio/wav" });
}

export type Recording = { blob: Blob; durationMs: number };

export class MicRecorder {
  private stream: MediaStream | null = null;
  private ctx: AudioContext | null = null;
  private processor: ScriptProcessorNode | null = null;
  private source: MediaStreamAudioSourceNode | null = null;
  private chunks: Float32Array[] = [];
  private startedAt = 0;
  /** Nível de energia (RMS) do último bloco capturado — usado para detectar silêncio. */
  private level = 0;

  async start() {
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
    });
    this.ctx = new AudioContext();
    if (this.ctx.state === "suspended") await this.ctx.resume().catch(() => {});
    this.source = this.ctx.createMediaStreamSource(this.stream);
    this.processor = this.ctx.createScriptProcessor(4096, 1, 1);
    this.chunks = [];
    this.level = 0;
    this.processor.onaudioprocess = (e) => {
      const data = e.inputBuffer.getChannelData(0);
      this.chunks.push(new Float32Array(data));
      let sum = 0;
      for (let i = 0; i < data.length; i++) sum += (data[i] ?? 0) * (data[i] ?? 0);
      this.level = Math.sqrt(sum / data.length);
    };
    this.source.connect(this.processor);
    this.processor.connect(this.ctx.destination);
    this.startedAt = Date.now();
  }

  /** Energia atual do microfone (0 a ~1). Permite detectar fala e silêncio. */
  getLevel(): number {
    return this.level;
  }

  /** Duração aproximada da gravação em andamento, em ms. */
  elapsedMs(): number {
    return this.startedAt ? Date.now() - this.startedAt : 0;
  }



  async stop(): Promise<Recording> {
    const sampleRate = this.ctx?.sampleRate ?? 48000;
    this.processor?.disconnect();
    this.source?.disconnect();
    this.stream?.getTracks().forEach((t) => t.stop());
    const ctx = this.ctx;
    this.processor = null;
    this.source = null;
    this.stream = null;
    this.ctx = null;
    const blob = encodeWav(this.chunks, sampleRate);
    this.chunks = [];
    await ctx?.close().catch(() => {});
    return { blob, durationMs: Date.now() - this.startedAt };
  }

  cancel() {
    this.processor?.disconnect();
    this.source?.disconnect();
    this.stream?.getTracks().forEach((t) => t.stop());
    this.ctx?.close().catch(() => {});
    this.chunks = [];
    this.processor = null;
    this.source = null;
    this.stream = null;
    this.ctx = null;
  }
}
