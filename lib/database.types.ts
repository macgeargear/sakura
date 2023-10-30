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
      user_vocabs: {
        Row: {
          id: string
          remembered: boolean
          user_id: string
          vocab_id: string
        }
        Insert: {
          id?: string
          remembered: boolean
          user_id: string
          vocab_id: string
        }
        Update: {
          id?: string
          remembered?: boolean
          user_id?: string
          vocab_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_vocabs_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_vocabs_vocab_id_fkey"
            columns: ["vocab_id"]
            referencedRelation: "vocabs"
            referencedColumns: ["guid"]
          }
        ]
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
