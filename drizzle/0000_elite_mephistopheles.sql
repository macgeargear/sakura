DO $$ BEGIN
 CREATE TYPE "level" AS ENUM('N5', 'N4', 'N3', 'N2', 'N1');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "vocabs" (
	"id" uuid PRIMARY KEY NOT NULL,
	"expression" text NOT NULL,
	"reading" text,
	"meaning" text NOT NULL,
	"level" "level"
);
