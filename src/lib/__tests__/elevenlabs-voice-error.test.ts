import { describe, expect, it } from "vitest";
import { classifyElevenLabsVoiceError } from "../elevenlabs-voice-error";

describe("ElevenLabs failure categories", () => {
  it("classifies the production clone restriction as unavailable, not exhausted credits", () => {
    const body = JSON.stringify({ detail: { type: "authorization_error", code: "subscription_required", status: "ivc_not_permitted" } });
    expect(classifyElevenLabsVoiceError(401, body).status).toBe(503);
  });
  it("recognizes the clone restriction even when only provider status is supplied", () => {
    expect(classifyElevenLabsVoiceError(401, '{"detail":{"status":"ivc_not_permitted"}}').status).toBe(503);
  });
  it("classifies an actual quota exhaustion as payment required", () => {
    expect(classifyElevenLabsVoiceError(401, '{"detail":{"code":"quota_exceeded"}}').status).toBe(402);
  });
  it("does not misclassify invalid credentials as quota exhaustion", () => {
    expect(classifyElevenLabsVoiceError(401, '{"detail":{"code":"invalid_api_key"}}').status).toBe(503);
  });
  it("preserves a genuine payment-required response", () => {
    expect(classifyElevenLabsVoiceError(402, "payment required").status).toBe(402);
  });
  it("preserves unrelated provider statuses and tolerates non-JSON errors", () => {
    expect(classifyElevenLabsVoiceError(429, "too many requests").status).toBe(429);
  });
});