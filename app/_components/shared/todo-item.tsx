"use client";

import { markDone } from "@/app/_actions/todo";
import { Todo } from "@/app/_lib/db/schema";
import { cn } from "@/app/_lib/utils";
import DeleteForm from "./delete-form";

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li
      className="border border-slate-200 rounded-md flex justify-between items-center p-4 w-full gap-4"
      key={todo.id}
    >
      <span
        className={cn({ "line-through": todo.done })}
        onClick={async () => {
          await markDone(todo.id, !todo.done);
        }}
      >
        {todo.title}
      </span>
      <DeleteForm id={todo.id} />
    </li>
  );
}
