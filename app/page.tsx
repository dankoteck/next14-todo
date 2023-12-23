import CreateForm from "@/app/_components/shared/create-form";
import * as todoActions from '@/app/_actions/todo'

export default async function Page() {
  // const todos = await getAll()
  
  // const todos = await todoActions.getAll()
  // console.log(todos)
  
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1 className="text-4xl text-center">Next 14 Todo App</h1>
      
      <CreateForm />
    </main>
  )
}
