import CreateForm from "@/app/_components/shared/create-form";
import DeleteForm from "@/app/_components/shared/delete-form";
import { getAll } from "@/app/_actions/todo";
import { unstable_noStore as noStore } from "next/cache";

export default async function Page() {
  noStore();

  const todos = await getAll();

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1 className="text-4xl text-center">Next 14 Todo App</h1>
      <CreateForm />
      <ul className="space-y-4 min-w-96">
        {todos.map((todo) => (
          <li
            className="border border-slate-200 rounded-md flex justify-between items-center p-4 w-full gap-4"
            key={todo.id}
          >
            <span className="">{todo.title}</span>
            <DeleteForm id={todo.id} />
          </li>
        ))}
      </ul>
    </main>
  );
}
