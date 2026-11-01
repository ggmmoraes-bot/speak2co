import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { hasFeature, useAccess } from "@/lib/entitlements";
import type { UnitPartKey } from "@/lib/curriculum/types";
import type { CourseLevel } from "@/lib/live-lesson/script";

/** Mapeia a base da rota do curso para o nível da Live Lesson. */
export const COURSE_LEVEL_BY_BASE: Record<string, CourseLevel> = {
  "/curso-beginner": "beginner",
  "/curso-intermediate": "intermediate",
  "/curso-upper": "upper",
};

/**
 * Entrada para a Guided Lesson with Gisele (incluída no All Access).
 * O botão fica sempre visível; nos demais planos o clique abre o convite
 * de upgrade em vez de iniciar a aula.
 */
export function EnterLiveLesson({
  courseBase,
  unitCode,
  part,
}: {
  courseBase: string;
  unitCode: string;
  part: UnitPartKey;
}) {
  const { data: access } = useAccess();
  const navigate = useNavigate();
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  const course = COURSE_LEVEL_BY_BASE[courseBase];
  if (!course) return null;

  const unlocked = hasFeature(access, "gisele_ai");
  const href = `/live-lesson/${course}/${unitCode}/${part}`;

  return (
    <div className="mt-3 flex flex-col items-start gap-1">
      <button
        type="button"
        onClick={() => {
          if (unlocked) void navigate({ to: href as "/" });
          else setUpgradeOpen(true);
        }}
        className="btn-gold inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
      >
        <Sparkles className="h-3.5 w-3.5" />
        Start Guided Lesson
      </button>
      <p className="text-[11px] text-muted-foreground">Guided by Gisele. Enhanced by AI.</p>

      <Dialog open={upgradeOpen} onOpenChange={setUpgradeOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-gold" />
              Guided Lesson — All Access
            </DialogTitle>
            <DialogDescription>
              Guided Lesson with Gisele is included in Speak2Co All Access. Get it to study with
              Gisele's guided experience, enhanced by AI.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button asChild className="btn-gold rounded-full font-semibold">
              <Link to="/premium">
                <Sparkles className="mr-2 h-4 w-4" /> Get All Access
              </Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
