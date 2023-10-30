export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          created_at: string
          id: string
          title: string
        }
        Insert: {
          created_at?: string
          id?: string
          title: string
        }
        Update: {
          created_at?: string
          id?: string
          title?: string
        }
        Relationships: []
      }
      vocabs: {
        Row: {
          expression: string
          guid: string
          meaning: string
          reading: string | null
          tags: string | null
        }
        Insert: {
          expression: string
          guid: string
          meaning: string
          reading?: string | null
          tags?: string | null
        }
        Update: {
          expression?: string
          guid?: string
          meaning?: string
          reading?: string | null
          tags?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
