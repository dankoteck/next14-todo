'use server';

import { db } from "@/app/_lib/db";

let currentId = 1;

export type CreateFormState = {
  messages: Record<string, any>,
  errors: Record<string, any>,
  fields: Record<string, any>
}

export async function getAll() {
  let todos
  
  try {
    todos = await db.query.todos.findMany()
    return todos
  } catch (e: any) {
    // Table is not created yet
    if (e.message === `relation "todos" does not exist`) {
      console.log('Table does not exist, creating table now...')
      todos = await db.query.todos.findMany()
      return todos
    } else {
      throw e
    }
  }
}

export async function create(prevState: CreateFormState, formData: FormData) {
  const todo = {
    id: currentId++,
    title: formData.get('title') as string,
    done: formData.get('done') as string,
    
  }
  
  // await db
  
  return {} as CreateFormState
}

