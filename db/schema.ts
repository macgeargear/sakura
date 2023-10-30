import { relations } from "drizzle-orm";
import {
  boolean,
  decimal,
  json,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  integer,
  uuid,
} from "drizzle-orm/pg-core";

export const levelEnum = pgEnum("level", ["N5", "N4", "N3", "N2", "N1"]);
export const vocabs = pgTable("vocabs", {
  id: uuid("id").primaryKey(),
  expression: text("expression").notNull(),
  reading: text("reading"),
  meaning: text("meaning").notNull(),
  level: levelEnum("level"),
});
