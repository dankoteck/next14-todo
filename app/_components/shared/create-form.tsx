'use client';

import { useFormState } from "react-dom";

import { CreateFormState, create } from "@/app/_actions/todo";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";

const initialState: CreateFormState = {
  messages: {},
  errors: {},
  fields: {}
}

export default function CreateForm() {
  const [state, dispatch] = useFormState(create, initialState)
  
  return (
    <form action={dispatch} className="flex items-center gap-4">
      <Input type="text" name="title" />
      <Button>Add</Button>
    </form>
  )
}
