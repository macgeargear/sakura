import { _UserVocabColumn } from "@/app/global";
import { Database as DB } from "@/lib/database.types";

type _Vocab = DB["public"]["Tables"]["vocabs"]["Row"];
type _UserVocab = DB["public"]["Tables"]["user_vocabs"]["Row"] & _Vocab;
type _VocabWithRemember = Vocab & {
  id: string;
  remembered: boolean;
};

type _UserVocabColumn = {
  id: string;
  expression: string;
  reading: string | null;
  meaning: string;
  tags: string | null;
  remembered: boolean;
};

declare global {
  type Database = DB;
  type Vocab = _Vocab;
  type VocabWithRemember = _VocabWithRemember;
  type UserVocabColumn = _UserVocabColumn;
}
