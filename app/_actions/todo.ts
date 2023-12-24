"use server";

import { db } from "@/app/_lib/db";
import { sql } from "@vercel/postgres";
import { todos } from "@/app/_lib/db/schema";
import { revalidatePath } from "next/cache";
import { asc, eq } from "drizzle-orm";

export type CreateFormState = {
  errors: Record<string, any>;
};

export async function getAll() {
  let data;

  try {
    data = await db.query.todos.findMany({
      orderBy: [asc(todos.id)],
    });
    return data;
  } catch (e: any) {
    // Table is not created yet
    if (e.message === `relation "todos" does not exist`) {
      console.log("Table does not exist, creating table now...");
      await sql`
          CREATE TABLE IF NOT EXISTS todos
          (
              id    SERIAL PRIMARY KEY,
              done  BOOLEAN DEFAULT false,
              title TEXT NOT NULL
          );
      `;
      data = await db.query.todos.findMany({
        orderBy: [asc(todos.id)],
      });
      return data;
    } else {
      throw e;
    }
  }
}

export async function create(prevState: CreateFormState, formData: FormData) {
  try {
    await db.insert(todos).values({ title: formData.get("title") as string });
    revalidatePath("/");

    return {
      errors: {},
    };
  } catch (e: any) {
    return {
      errors: {
        create: e.message,
      },
    };
  }
}

export async function remove(id: number) {
  try {
    await db.delete(todos).where(eq(todos.id, id));
    revalidatePath("/");

    return {
      errors: {},
    };
  } catch (e: any) {
    return {
      errors: {
        remove: e.message,
      },
    };
  }
}

export async function markDone(id: number, done: boolean) {
  try {
    await db.update(todos).set({ done }).where(eq(todos.id, id));
    revalidatePath("/");

    return {
      errors: {},
    };
  } catch (e: any) {
    return {
      errors: {
        remove: e.message,
      },
    };
  }
}
