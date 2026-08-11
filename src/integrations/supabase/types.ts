export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      ai_usage_daily: {
        Row: {
          created_at: string
          feature_key: string
          id: string
          seconds_used: number
          updated_at: string
          usage_date: string
          user_id: string
        }
        Insert: {
          created_at?: string
          feature_key?: string
          id?: string
          seconds_used?: number
          updated_at?: string
          usage_date?: string
          user_id: string
        }
        Update: {
          created_at?: string
          feature_key?: string
          id?: string
          seconds_used?: number
          updated_at?: string
          usage_date?: string
          user_id?: string
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          created_at: string
          id: string
          parts: Json
          role: string
          thread_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          parts?: Json
          role: string
          thread_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          parts?: Json
          role?: string
          thread_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "chat_threads"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_threads: {
        Row: {
          created_at: string
          id: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          title?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      course_progress: {
        Row: {
          answers: Json
          completed: boolean
          completed_at: string | null
          course_id: string
          created_at: string
          grammar_mastered: boolean
          id: string
          lesson_id: string
          pronunciation_score: number | null
          quiz_score: number | null
          sections_done: Json
          updated_at: string
          user_id: string
          vocabulary_mastered: number
        }
        Insert: {
          answers?: Json
          completed?: boolean
          completed_at?: string | null
          course_id: string
          created_at?: string
          grammar_mastered?: boolean
          id?: string
          lesson_id: string
          pronunciation_score?: number | null
          quiz_score?: number | null
          sections_done?: Json
          updated_at?: string
          user_id: string
          vocabulary_mastered?: number
        }
        Update: {
          answers?: Json
          completed?: boolean
          completed_at?: string | null
          course_id?: string
          created_at?: string
          grammar_mastered?: boolean
          id?: string
          lesson_id?: string
          pronunciation_score?: number | null
          quiz_score?: number | null
          sections_done?: Json
          updated_at?: string
          user_id?: string
          vocabulary_mastered?: number
        }
        Relationships: []
      }
      daily_exercises: {
        Row: {
          answers: Json
          completed: boolean
          created_at: string
          exercise_date: string
          explanation_feedback: Json
          id: string
          instructions: string | null
          items: Json
          score: number | null
          title: string
          updated_at: string
          user_id: string
          week_number: number | null
        }
        Insert: {
          answers?: Json
          completed?: boolean
          created_at?: string
          exercise_date?: string
          explanation_feedback?: Json
          id?: string
          instructions?: string | null
          items?: Json
          score?: number | null
          title: string
          updated_at?: string
          user_id: string
          week_number?: number | null
        }
        Update: {
          answers?: Json
          completed?: boolean
          created_at?: string
          exercise_date?: string
          explanation_feedback?: Json
          id?: string
          instructions?: string | null
          items?: Json
          score?: number | null
          title?: string
          updated_at?: string
          user_id?: string
          week_number?: number | null
        }
        Relationships: []
      }
      features: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          key: string
          name: string
          route: string | null
          sort_order: number
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          key: string
          name: string
          route?: string | null
          sort_order?: number
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          key?: string
          name?: string
          route?: string | null
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      fluency_missions: {
        Row: {
          blocks: Json
          completed: boolean
          created_at: string
          id: string
          minutes: number
          mission_date: string
          updated_at: string
          user_id: string
        }
        Insert: {
          blocks?: Json
          completed?: boolean
          created_at?: string
          id?: string
          minutes?: number
          mission_date?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          blocks?: Json
          completed?: boolean
          created_at?: string
          id?: string
          minutes?: number
          mission_date?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      fluency_progress: {
        Row: {
          answers: Json
          attempts: number
          completed: boolean
          completed_at: string | null
          created_at: string
          feedback: Json | null
          id: string
          module_id: string
          score: number | null
          sections_done: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          answers?: Json
          attempts?: number
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          feedback?: Json | null
          id?: string
          module_id: string
          score?: number | null
          sections_done?: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          answers?: Json
          attempts?: number
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          feedback?: Json | null
          id?: string
          module_id?: string
          score?: number | null
          sections_done?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      founder_messages: {
        Row: {
          answered: boolean
          content: string
          created_at: string
          id: string
          needs_founder: boolean
          role: string
          user_id: string
        }
        Insert: {
          answered?: boolean
          content: string
          created_at?: string
          id?: string
          needs_founder?: boolean
          role: string
          user_id: string
        }
        Update: {
          answered?: boolean
          content?: string
          created_at?: string
          id?: string
          needs_founder?: boolean
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      interview_sessions: {
        Row: {
          answers: Json
          completed: boolean
          completed_at: string | null
          created_at: string
          durations: Json
          feedback: Json | null
          id: string
          questions: Json
          score: number | null
          title: string
          total_seconds: number
          track: string
          updated_at: string
          user_id: string
        }
        Insert: {
          answers?: Json
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          durations?: Json
          feedback?: Json | null
          id?: string
          questions?: Json
          score?: number | null
          title?: string
          total_seconds?: number
          track?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          answers?: Json
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          durations?: Json
          feedback?: Json | null
          id?: string
          questions?: Json
          score?: number | null
          title?: string
          total_seconds?: number
          track?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      placement_tests: {
        Row: {
          answers: Json
          completed: boolean
          completed_at: string | null
          correct_count: number
          created_at: string
          feedback: Json | null
          id: string
          level: string | null
          questions: Json
          score: number | null
          total_questions: number
          updated_at: string
          user_id: string
          writing_answer: string | null
          writing_prompt: string | null
        }
        Insert: {
          answers?: Json
          completed?: boolean
          completed_at?: string | null
          correct_count?: number
          created_at?: string
          feedback?: Json | null
          id?: string
          level?: string | null
          questions?: Json
          score?: number | null
          total_questions?: number
          updated_at?: string
          user_id: string
          writing_answer?: string | null
          writing_prompt?: string | null
        }
        Update: {
          answers?: Json
          completed?: boolean
          completed_at?: string | null
          correct_count?: number
          created_at?: string
          feedback?: Json | null
          id?: string
          level?: string | null
          questions?: Json
          score?: number | null
          total_questions?: number
          updated_at?: string
          user_id?: string
          writing_answer?: string | null
          writing_prompt?: string | null
        }
        Relationships: []
      }
      plan_features: {
        Row: {
          created_at: string
          enabled: boolean
          feature_key: string
          id: string
          note: string | null
          plan_key: string
        }
        Insert: {
          created_at?: string
          enabled?: boolean
          feature_key: string
          id?: string
          note?: string | null
          plan_key: string
        }
        Update: {
          created_at?: string
          enabled?: boolean
          feature_key?: string
          id?: string
          note?: string | null
          plan_key?: string
        }
        Relationships: [
          {
            foreignKeyName: "plan_features_feature_key_fkey"
            columns: ["feature_key"]
            isOneToOne: false
            referencedRelation: "features"
            referencedColumns: ["key"]
          },
          {
            foreignKeyName: "plan_features_plan_key_fkey"
            columns: ["plan_key"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["key"]
          },
        ]
      }
      plans: {
        Row: {
          access_level: number
          ai_daily_minutes: number | null
          created_at: string
          currency: string
          description: string | null
          highlight: boolean
          id: string
          is_active: boolean
          key: string
          monthly_checkout_key: string | null
          monthly_price: number | null
          name: string
          sort_order: number
          tagline: string | null
          updated_at: string
          yearly_checkout_key: string | null
          yearly_price: number | null
        }
        Insert: {
          access_level?: number
          ai_daily_minutes?: number | null
          created_at?: string
          currency?: string
          description?: string | null
          highlight?: boolean
          id?: string
          is_active?: boolean
          key: string
          monthly_checkout_key?: string | null
          monthly_price?: number | null
          name: string
          sort_order?: number
          tagline?: string | null
          updated_at?: string
          yearly_checkout_key?: string | null
          yearly_price?: number | null
        }
        Update: {
          access_level?: number
          ai_daily_minutes?: number | null
          created_at?: string
          currency?: string
          description?: string | null
          highlight?: boolean
          id?: string
          is_active?: boolean
          key?: string
          monthly_checkout_key?: string | null
          monthly_price?: number | null
          name?: string
          sort_order?: number
          tagline?: string | null
          updated_at?: string
          yearly_checkout_key?: string | null
          yearly_price?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          english_level: string | null
          full_name: string | null
          goal: string | null
          id: string
          plan: Database["public"]["Enums"]["plan_tier"]
          target_level: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          english_level?: string | null
          full_name?: string | null
          goal?: string | null
          id: string
          plan?: Database["public"]["Enums"]["plan_tier"]
          target_level?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          english_level?: string | null
          full_name?: string | null
          goal?: string | null
          id?: string
          plan?: Database["public"]["Enums"]["plan_tier"]
          target_level?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      study_plan_versions: {
        Row: {
          created_at: string
          id: string
          locked_weeks: number[]
          milestones: Json
          reason: string
          refined_weeks: number[]
          summary: string
          user_id: string
          weekly_focus: Json
        }
        Insert: {
          created_at?: string
          id?: string
          locked_weeks?: number[]
          milestones?: Json
          reason?: string
          refined_weeks?: number[]
          summary: string
          user_id: string
          weekly_focus?: Json
        }
        Update: {
          created_at?: string
          id?: string
          locked_weeks?: number[]
          milestones?: Json
          reason?: string
          refined_weeks?: number[]
          summary?: string
          user_id?: string
          weekly_focus?: Json
        }
        Relationships: []
      }
      study_plans: {
        Row: {
          created_at: string
          id: string
          locked_weeks: number[]
          milestones: Json
          summary: string
          updated_at: string
          user_id: string
          weekly_focus: Json
        }
        Insert: {
          created_at?: string
          id?: string
          locked_weeks?: number[]
          milestones?: Json
          summary: string
          updated_at?: string
          user_id: string
          weekly_focus?: Json
        }
        Update: {
          created_at?: string
          id?: string
          locked_weeks?: number[]
          milestones?: Json
          summary?: string
          updated_at?: string
          user_id?: string
          weekly_focus?: Json
        }
        Relationships: []
      }
      subscription_events: {
        Row: {
          amount: number | null
          created_at: string
          currency: string | null
          event_type: string
          id: string
          message: string | null
          next_payment_date: string | null
          preapproval_id: string | null
          raw: Json
          status: string | null
          subscription_id: string | null
          user_id: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          currency?: string | null
          event_type: string
          id?: string
          message?: string | null
          next_payment_date?: string | null
          preapproval_id?: string | null
          raw?: Json
          status?: string | null
          subscription_id?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          currency?: string | null
          event_type?: string
          id?: string
          message?: string | null
          next_payment_date?: string | null
          preapproval_id?: string | null
          raw?: Json
          status?: string | null
          subscription_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscription_events_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          amount: number | null
          cancel_at_period_end: boolean
          created_at: string
          currency: string
          current_period_end: string | null
          environment: string
          external_reference: string | null
          id: string
          init_point: string | null
          next_payment_date: string | null
          paddle_customer_id: string | null
          paddle_subscription_id: string | null
          plan_key: string | null
          plan_label: string | null
          preapproval_id: string | null
          provider: string
          raw: Json
          scheduled_plan_key: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          amount?: number | null
          cancel_at_period_end?: boolean
          created_at?: string
          currency?: string
          current_period_end?: string | null
          environment?: string
          external_reference?: string | null
          id?: string
          init_point?: string | null
          next_payment_date?: string | null
          paddle_customer_id?: string | null
          paddle_subscription_id?: string | null
          plan_key?: string | null
          plan_label?: string | null
          preapproval_id?: string | null
          provider?: string
          raw?: Json
          scheduled_plan_key?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number | null
          cancel_at_period_end?: boolean
          created_at?: string
          currency?: string
          current_period_end?: string | null
          environment?: string
          external_reference?: string | null
          id?: string
          init_point?: string | null
          next_payment_date?: string | null
          paddle_customer_id?: string | null
          paddle_subscription_id?: string | null
          plan_key?: string | null
          plan_label?: string | null
          preapproval_id?: string | null
          provider?: string
          raw?: Json
          scheduled_plan_key?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      travel_progress: {
        Row: {
          answers: Json
          briefing_completed: boolean
          completed: boolean
          completed_at: string | null
          created_at: string
          current_index: number
          feedback: Json | null
          id: string
          track_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          answers?: Json
          briefing_completed?: boolean
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          current_index?: number
          feedback?: Json | null
          id?: string
          track_id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          answers?: Json
          briefing_completed?: boolean
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          current_index?: number
          feedback?: Json | null
          id?: string
          track_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      current_plan_tier: { Args: { user_uuid: string }; Returns: string }
      fluency_leaderboard: {
        Args: { _limit?: number }
        Returns: {
          avatar_url: string
          chat_points: number
          display_name: string
          english_level: string
          exercise_points: number
          interview_points: number
          placement_points: number
          total_points: number
          user_id: string
        }[]
      }
      has_active_subscription: {
        Args: { check_env?: string; user_uuid: string }
        Returns: boolean
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      sync_expired_plans: { Args: never; Returns: undefined }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      plan_tier: "free" | "premium" | "essential" | "signature"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
      plan_tier: ["free", "premium", "essential", "signature"],
    },
  },
} as const
