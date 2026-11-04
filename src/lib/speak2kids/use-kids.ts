import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { KidsProgressRow } from "./progress";

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
        .select("unit_number, part, completed, quick_check_score, activities_done");
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
    mutationFn: async (p: { nickname: string; avatar: string }) => {
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
    mutationFn: async (p: {
      unit: number;
      part: 1 | 2;
      activities_done?: string[];
      quick_check_score?: number | null;
      completed?: boolean;
    }) => {
      const user_id = await uid();
      const row: Record<string, unknown> = { user_id, unit_number: p.unit, part: p.part };
      if (p.activities_done) row.activities_done = p.activities_done;
      if (p.quick_check_score !== undefined) row.quick_check_score = p.quick_check_score;
      if (p.completed) {
        row.completed = true;
        row.completed_at = new Date().toISOString();
      }
      const { error } = await supabase
        .from("kids_progress")
        .upsert(row as never, { onConflict: "user_id,unit_number,part" });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["kids-progress"] }),
  });
}
