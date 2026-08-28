import { Trophy } from "lucide-react";
import { StudentResponse } from "@/components/live-lesson/StudentResponse";

/** Desafio final falado da parte da unidade. */
export function SpeakingChallenge({
  promptEn,
  promptPt,
  value,
  onChange,
  onSubmit,
  busy,
}: {
  promptEn: string;
  promptPt?: string;
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  busy: boolean;
}) {
  return (
    <div className="space-y-3">
      <p className="flex items-center gap-2 text-sm font-semibold text-gold">
        <Trophy className="h-4 w-4" /> Your Challenge
      </p>
      <StudentResponse
        interaction="speak"
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        busy={busy}
        promptEn={promptEn}
        {...(promptPt ? { promptPt } : {})}
      />
    </div>
  );
}
