CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"done" boolean DEFAULT false,
	"title" text NOT NULL
);
