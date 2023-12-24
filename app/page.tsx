import { getAll } from "@/app/_actions/todo";
import CreateForm from "@/app/_components/shared/create-form";
import { unstable_noStore as noStore } from "next/cache";
import TodoItem from "./_components/shared/todo-item";

export default async function Page() {
  noStore();

  console.log(!!global.db)

  const todos = await getAll();

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1 className="text-4xl text-center">Next 14 Todo App</h1>
      <CreateForm />
      <ul className="space-y-4 min-w-96">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}
