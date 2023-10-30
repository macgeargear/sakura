import { Database as DB } from "@/lib/database.types";

type _Vocab = DB["public"]["Tables"]["vocabs"]["Row"];

declare global {
  type Database = DB;
  type Vocab = _Vocab;
}
