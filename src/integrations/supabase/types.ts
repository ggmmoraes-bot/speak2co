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
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      ai_feedback: {
        Row: {
          category: string
          created_at: string
          id: string
          observation: string
          priority: number
          session_id: string | null
          user_id: string
        }
        Insert: {
          category: string
          created_at?: string
          id?: string
          observation: string
          priority?: number
          session_id?: string | null
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          observation?: string
          priority?: number
          session_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_feedback_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "gisele_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_missions: {
        Row: {
          context: string
          created_at: string
          criteria: Json
          focus: string
          id: string
          is_active: boolean
          key: string
          level: string
          minutes: number
          objective: string
          sort_order: number
          title: string
          updated_at: string
        }
        Insert: {
          context: string
          created_at?: string
          criteria?: Json
          focus?: string
          id?: string
          is_active?: boolean
          key: string
          level?: string
          minutes?: number
          objective: string
          sort_order?: number
          title: string
          updated_at?: string
        }
        Update: {
          context?: string
          created_at?: string
          criteria?: Json
          focus?: string
          id?: string
          is_active?: boolean
          key?: string
          level?: string
          minutes?: number
          objective?: string
          sort_order?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      ai_profiles: {
        Row: {
          created_at: string
          id: string
          level: string | null
          objective: string | null
          onboarding_completed: boolean
          preferences: Json
          preferred_voice: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          level?: string | null
          objective?: string | null
          onboarding_completed?: boolean
          preferences?: Json
          preferred_voice?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          level?: string | null
          objective?: string | null
          onboarding_completed?: boolean
          preferences?: Json
          preferred_voice?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      ai_recommendations: {
        Row: {
          content: string
          created_at: string
          id: string
          priority: number
          route: string | null
          session_id: string | null
          status: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          priority?: number
          route?: string | null
          session_id?: string | null
          status?: string
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          priority?: number
          route?: string | null
          session_id?: string | null
          status?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_recommendations_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "gisele_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_usage_daily: {
        Row: {
          created_at: string
          estimated_cost: number
          feature_key: string
          id: string
          seconds_used: number
          updated_at: string
          usage_date: string
          user_id: string
        }
        Insert: {
          created_at?: string
          estimated_cost?: number
          feature_key?: string
          id?: string
          seconds_used?: number
          updated_at?: string
          usage_date?: string
          user_id: string
        }
        Update: {
          created_at?: string
          estimated_cost?: number
          feature_key?: string
          id?: string
          seconds_used?: number
          updated_at?: string
          usage_date?: string
          user_id?: string
        }
        Relationships: []
      }
      ai_voice_settings: {
        Row: {
          auto_speak: boolean
          consent_status: string
          created_at: string
          id: string
          provider: string
          rate: number
          support_language: string
          updated_at: string
          user_id: string
          voice_id: string
          volume: number
        }
        Insert: {
          auto_speak?: boolean
          consent_status?: string
          created_at?: string
          id?: string
          provider?: string
          rate?: number
          support_language?: string
          updated_at?: string
          user_id: string
          voice_id?: string
          volume?: number
        }
        Update: {
          auto_speak?: boolean
          consent_status?: string
          created_at?: string
          id?: string
          provider?: string
          rate?: number
          support_language?: string
          updated_at?: string
          user_id?: string
          voice_id?: string
          volume?: number
        }
        Relationships: []
      }
      benefit_grant_events: {
        Row: {
          action: string
          actor_id: string | null
          created_at: string
          grant_id: string
          id: string
          payload: Json
        }
        Insert: {
          action: string
          actor_id?: string | null
          created_at?: string
          grant_id: string
          id?: string
          payload?: Json
        }
        Update: {
          action?: string
          actor_id?: string | null
          created_at?: string
          grant_id?: string
          id?: string
          payload?: Json
        }
        Relationships: [
          {
            foreignKeyName: "benefit_grant_events_grant_id_fkey"
            columns: ["grant_id"]
            isOneToOne: false
            referencedRelation: "benefit_grants"
            referencedColumns: ["id"]
          },
        ]
      }
      benefit_grants: {
        Row: {
          code: string | null
          created_at: string
          discount_percent: number
          email_snapshot: string | null
          ends_at: string | null
          granted_by: string | null
          id: string
          kind: string
          note: string | null
          plan_key: string
          starts_at: string
          status: string
          updated_at: string
          usage_count: number
          usage_limit: number | null
          user_id: string
        }
        Insert: {
          code?: string | null
          created_at?: string
          discount_percent?: number
          email_snapshot?: string | null
          ends_at?: string | null
          granted_by?: string | null
          id?: string
          kind: string
          note?: string | null
          plan_key?: string
          starts_at?: string
          status?: string
          updated_at?: string
          usage_count?: number
          usage_limit?: number | null
          user_id: string
        }
        Update: {
          code?: string | null
          created_at?: string
          discount_percent?: number
          email_snapshot?: string | null
          ends_at?: string | null
          granted_by?: string | null
          id?: string
          kind?: string
          note?: string | null
          plan_key?: string
          starts_at?: string
          status?: string
          updated_at?: string
          usage_count?: number
          usage_limit?: number | null
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
          context: string | null
          created_at: string
          ended_at: string | null
          id: string
          product: string
          started_at: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          context?: string | null
          created_at?: string
          ended_at?: string | null
          id?: string
          product?: string
          started_at?: string
          title?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          context?: string | null
          created_at?: string
          ended_at?: string | null
          id?: string
          product?: string
          started_at?: string
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
          notified_at: string | null
          role: string
          user_id: string
        }
        Insert: {
          answered?: boolean
          content: string
          created_at?: string
          id?: string
          needs_founder?: boolean
          notified_at?: string | null
          role: string
          user_id: string
        }
        Update: {
          answered?: boolean
          content?: string
          created_at?: string
          id?: string
          needs_founder?: boolean
          notified_at?: string | null
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      gisele_memory: {
        Row: {
          content: string
          created_at: string
          id: string
          kind: string
          review_at: string | null
          source: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          kind: string
          review_at?: string | null
          source?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          kind?: string
          review_at?: string | null
          source?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      gisele_sessions: {
        Row: {
          corrections: Json
          created_at: string
          estimated_level: string | null
          focus: string
          id: string
          minutes: number
          score: number | null
          session_date: string
          session_type: string
          soft_corrections: Json
          summary: string | null
          thread_id: string | null
          transcript: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          corrections?: Json
          created_at?: string
          estimated_level?: string | null
          focus?: string
          id?: string
          minutes?: number
          score?: number | null
          session_date?: string
          session_type?: string
          soft_corrections?: Json
          summary?: string | null
          thread_id?: string | null
          transcript?: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          corrections?: Json
          created_at?: string
          estimated_level?: string | null
          focus?: string
          id?: string
          minutes?: number
          score?: number | null
          session_date?: string
          session_type?: string
          soft_corrections?: Json
          summary?: string | null
          thread_id?: string | null
          transcript?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "gisele_sessions_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "chat_threads"
            referencedColumns: ["id"]
          },
        ]
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
      live_lesson_media: {
        Row: {
          caption: string | null
          course_id: string
          created_at: string
          id: string
          part: string
          poster_url: string | null
          stage: string
          unit_code: string
          updated_at: string
          video_url: string
        }
        Insert: {
          caption?: string | null
          course_id: string
          created_at?: string
          id?: string
          part: string
          poster_url?: string | null
          stage: string
          unit_code: string
          updated_at?: string
          video_url: string
        }
        Update: {
          caption?: string | null
          course_id?: string
          created_at?: string
          id?: string
          part?: string
          poster_url?: string | null
          stage?: string
          unit_code?: string
          updated_at?: string
          video_url?: string
        }
        Relationships: []
      }
      live_lesson_progress: {
        Row: {
          challenge_result: Json | null
          completed: boolean
          completed_at: string | null
          confidence: number | null
          course_id: string
          created_at: string
          fluency_note: string | null
          grammar_practiced: string[]
          id: string
          part: string
          pronunciation_score: number | null
          speaking_attempts: number
          stages_done: string[]
          summary: Json | null
          unit_code: string
          updated_at: string
          user_id: string
          vocabulary_practiced: string[]
        }
        Insert: {
          challenge_result?: Json | null
          completed?: boolean
          completed_at?: string | null
          confidence?: number | null
          course_id: string
          created_at?: string
          fluency_note?: string | null
          grammar_practiced?: string[]
          id?: string
          part: string
          pronunciation_score?: number | null
          speaking_attempts?: number
          stages_done?: string[]
          summary?: Json | null
          unit_code: string
          updated_at?: string
          user_id: string
          vocabulary_practiced?: string[]
        }
        Update: {
          challenge_result?: Json | null
          completed?: boolean
          completed_at?: string | null
          confidence?: number | null
          course_id?: string
          created_at?: string
          fluency_note?: string | null
          grammar_practiced?: string[]
          id?: string
          part?: string
          pronunciation_score?: number | null
          speaking_attempts?: number
          stages_done?: string[]
          summary?: Json | null
          unit_code?: string
          updated_at?: string
          user_id?: string
          vocabulary_practiced?: string[]
        }
        Relationships: []
      }
      live_lesson_script_cache: {
        Row: {
          cache_key: string
          course_id: string
          created_at: string
          id: string
          part: string
          script: Json
          unit_code: string
        }
        Insert: {
          cache_key: string
          course_id: string
          created_at?: string
          id?: string
          part: string
          script: Json
          unit_code: string
        }
        Update: {
          cache_key?: string
          course_id?: string
          created_at?: string
          id?: string
          part?: string
          script?: Json
          unit_code?: string
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
      practice_meeting_signups: {
        Row: {
          completed_at: string | null
          created_at: string
          feedback: Json | null
          id: string
          meeting_id: string
          reminded_15m: boolean
          reminded_24h: boolean
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          feedback?: Json | null
          id?: string
          meeting_id: string
          reminded_15m?: boolean
          reminded_24h?: boolean
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          feedback?: Json | null
          id?: string
          meeting_id?: string
          reminded_15m?: boolean
          reminded_24h?: boolean
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "practice_meeting_signups_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "practice_meetings"
            referencedColumns: ["id"]
          },
        ]
      }
      practice_meetings: {
        Row: {
          capacity: number
          created_at: string
          description: string
          duration_minutes: number
          id: string
          is_active: boolean
          level: string
          min_plan: string
          starts_at: string
          title: string
          title_pt: string | null
          topic: string
          updated_at: string
        }
        Insert: {
          capacity?: number
          created_at?: string
          description?: string
          duration_minutes?: number
          id?: string
          is_active?: boolean
          level?: string
          min_plan?: string
          starts_at: string
          title: string
          title_pt?: string | null
          topic?: string
          updated_at?: string
        }
        Update: {
          capacity?: number
          created_at?: string
          description?: string
          duration_minutes?: number
          id?: string
          is_active?: boolean
          level?: string
          min_plan?: string
          starts_at?: string
          title?: string
          title_pt?: string | null
          topic?: string
          updated_at?: string
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
      active_courtesy_plan: { Args: { user_uuid: string }; Returns: string }
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
