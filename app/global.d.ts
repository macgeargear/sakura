import { Database as DB } from "@/lib/database.types";

type _Vocab = DB["public"]["Tables"]["vocabs"]["Row"];
interface _VocabWithRemember extends Vocab {
  remembered?: boolean;
}

declare global {
  type Database = DB;
  type Vocab = _Vocab;
  type VocabWithRemember = _VocabWithRemember;
}
