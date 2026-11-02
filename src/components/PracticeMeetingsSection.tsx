import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { CalendarDays, DoorOpen, Loader2, Lock, Users } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  listPracticeMeetings,
  joinPracticeMeeting,
  leavePracticeMeeting,
  isRoomOpen,
  meetingRoomWindow,
  type PracticeMeeting,
} from "@/lib/practice-meetings.functions";

function formatWhen(iso: string) {
  return new Date(iso).toLocaleString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });
}

function countdown(iso: string, now: number) {
  const diff = new Date(iso).getTime() - now;
  if (diff <= 0) return "Acontecendo agora";
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  if (days > 0) return `Faltam ${days}d ${hours}h`;
  if (hours > 0) return `Faltam ${hours}h ${minutes}min`;
  return `Faltam ${minutes} min`;
}

/** Encontros de prática com data real, inscrição e sala guiada por IA. */
export function PracticeMeetingsSection() {
  const fetchMeetings = useServerFn(listPracticeMeetings);
  const join = useServerFn(joinPracticeMeeting);
  const leave = useServerFn(leavePracticeMeeting);
  const queryClient = useQueryClient();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const { data: meetings = [], isPending } = useQuery({
    queryKey: ["practice-meetings"],
    queryFn: () => fetchMeetings(),
  });

  const joinMutation = useMutation({
    mutationFn: (meetingId: string) => join({ data: { meetingId } }),
    onSuccess: () => {
      toast.success("Inscrição confirmada. Você receberá o lembrete na Central de mensagens.");
      void queryClient.invalidateQueries({ queryKey: ["practice-meetings"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Não foi possível inscrever."),
  });

  const leaveMutation = useMutation({
    mutationFn: (meetingId: string) => leave({ data: { meetingId } }),
    onSuccess: () => {
      toast.success("Inscrição cancelada.");
      void queryClient.invalidateQueries({ queryKey: ["practice-meetings"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Não foi possível cancelar."),
  });

  const mine = meetings.filter((m) => m.joined);

  return (
    <section className="mt-10">
      <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
        <CalendarDays className="h-5 w-5 text-gold" /> Practice meetings
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Encontros com data e hora reais. A sala guiada abre 10 minutos antes e conduz a atividade
        etapa por etapa, com correção da IA.
      </p>

      {mine.length > 0 && (
        <div className="mt-4 rounded-3xl border border-gold/40 bg-gold/5 p-4">
          <p className="text-xs font-semibold uppercase text-gold">My meetings</p>
          <ul className="mt-2 space-y-1">
            {mine.map((m) => (
              <li key={m.id} className="text-sm text-foreground">
                {m.title} · {formatWhen(m.startsAt)} · {countdown(m.startsAt, now)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {isPending && (
        <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" /> Carregando encontros…
        </p>
      )}

      {!isPending && meetings.length === 0 && (
        <p className="mt-4 rounded-3xl border border-border bg-card/60 p-6 text-sm text-muted-foreground">
          Nenhum encontro agendado no momento. Assim que a Academic Team publicar novas datas, elas
          aparecem aqui.
        </p>
      )}

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {meetings.map((m: PracticeMeeting) => {
          const open = isRoomOpen(m.startsAt, m.durationMinutes, now);
          const full = m.seatsTaken >= m.capacity && !m.joined;
          const { opensAt } = meetingRoomWindow(m.startsAt, m.durationMinutes);
          return (
            <article key={m.id} className="rounded-3xl border border-border bg-card/60 p-6">
              <h3 className="text-base font-semibold text-foreground">
                {m.title}
                {m.titlePt && (
                  <span className="text-xs font-normal text-muted-foreground"> ({m.titlePt})</span>
                )}
              </h3>
              <p className="mt-1 text-xs font-semibold text-gold">{formatWhen(m.startsAt)}</p>
              <p className="text-[11px] text-muted-foreground">
                {countdown(m.startsAt, now)} · {m.durationMinutes} min · Level {m.level}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{m.description}</p>
              <p className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground">
                <Users className="h-3.5 w-3.5" /> {m.seatsTaken}/{m.capacity} vagas
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {!m.joined ? (
                  <Button
                    size="sm"
                    disabled={full || joinMutation.isPending}
                    onClick={() => joinMutation.mutate(m.id)}
                  >
                    {full ? "Sold out" : "Join this meeting"}
                  </Button>
                ) : (
                  <>
                    {open ? (
                      <Button size="sm" asChild>
                        <Link
                          to="/comunidade/encontro/$meetingId"
                          params={{ meetingId: m.id }}
                        >
                          <DoorOpen className="mr-2 h-4 w-4" /> Enter the room
                        </Link>
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled>
                        <Lock className="mr-2 h-4 w-4" />
                        Abre {new Date(opensAt).toLocaleTimeString("pt-BR", {
                          hour: "2-digit",
                          minute: "2-digit",
                          timeZone: "America/Sao_Paulo",
                        })}
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      disabled={leaveMutation.isPending}
                      onClick={() => leaveMutation.mutate(m.id)}
                    >
                      Cancel registration
                    </Button>
                  </>
                )}
                {m.completed && (
                  <span className="self-center text-[11px] font-semibold text-gold">
                    Concluído
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
