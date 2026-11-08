import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { partStatus, passedQuickCheck, type KidsProgressRow } from "./progress";
import { buildQuickCheck, getKidsUnit, KIDS_AVATARS } from "./curriculum";
import type { Database } from "@/integrations/supabase/types";
import { toast } from "sonner";

async function uid() {
  const { data } = await supabase.auth.getUser();
  if (!data.user) throw new Error("Not signed in");
  return data.user.id;
}

export function useKidsProgress() {
  return useQuery({
    queryKey: ["kids-progress"],
    queryFn: async (): Promise<KidsProgressRow[]> => {
      const { data, error } = await supabase
        .from("kids_progress")
        .select("unit_number, part, completed, quick_check_score, activities_done, completed_at");
      if (error) throw error;
      return data ?? [];
    },
  });
}

export function useKidsProfile() {
  return useQuery({
    queryKey: ["kids-profile"],
    queryFn: async () => {
      const { data, error } = await supabase.from("kids_profiles").select("nickname, avatar").maybeSingle();
      if (error) throw error;
      return data;
    },
  });
}

export function useSaveKidsProfile() {
  const qc = useQueryClient();
  return useMutation({
    onError: () => toast.error("Não foi possível salvar o perfil. Tente novamente."),
    mutationFn: async (p: { nickname: string; avatar: string }) => {
      if (!p.nickname.trim() || p.nickname.trim().length > 20 || !KIDS_AVATARS.includes(p.avatar)) throw new Error("Escolha um apelido curto e um avatar da lista.");
      const user_id = await uid();
      const { error } = await supabase.from("kids_profiles").upsert({ user_id, ...p });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["kids-profile"] }),
  });
}

export function useSavePart() {
  const qc = useQueryClient();
  return useMutation({
    scope: { id: "kids-progress-save" },
    onError: () => toast.error("Não foi possível salvar. Tente novamente; sua aula continua aberta."),
    mutationFn: async (p: {
      unit: number;
      part: 1 | 2;
      activities_done?: string[];
      quick_check_score?: number | null;
      completed?: boolean;
    }) => {
      const user_id = await uid();
      const unit = getKidsUnit(p.unit);
      if (!unit) throw new Error("Invalid unit");
      const { data: current, error: readError } = await supabase.from("kids_progress").select("*").eq("user_id", user_id);
      if (readError) throw readError;
      if (partStatus(current ?? [], p.unit, p.part) === "locked") throw new Error("Conclua a parte anterior primeiro.");
      const previous = current?.find((r) => r.unit_number === p.unit && r.part === p.part);
      const activities = [...new Set([...(previous?.activities_done ?? []), ...(p.activities_done ?? [])])];
      const score = Math.max(previous?.quick_check_score ?? 0, p.quick_check_score ?? 0);
      if (p.completed && p.part === 1 && !passedQuickCheck(score, buildQuickCheck(unit).length)) throw new Error("Complete o Quick Check primeiro.");
      if (p.completed && p.part === 2 && ![...unit.activities, "Communication Challenge"].every((a) => activities.includes(a))) throw new Error("Complete as atividades e o desafio primeiro.");
      const row: Database["public"]["Tables"]["kids_progress"]["Insert"] = {
        user_id, unit_number: p.unit, part: p.part,
        activities_done: activities,
        quick_check_score: score || null,
        completed: previous?.completed === true || p.completed === true,
        completed_at: previous?.completed_at ?? (p.completed ? new Date().toISOString() : null),
      };
      const { error } = await supabase.from("kids_progress").upsert(row, { onConflict: "user_id,unit_number,part" });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["kids-progress"] }),
  });
}
