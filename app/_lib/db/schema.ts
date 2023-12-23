import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  done: boolean("done").default(false),
  title: text("title").notNull(),
});

export type Todo = typeof todos.$inferSelect;
