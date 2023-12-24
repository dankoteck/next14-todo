"use client";

import { useFormState } from "react-dom";

import { create, CreateFormState } from "@/app/_actions/todo";
import { Input } from "@/app/_components/ui/input";
import CreateButton from "./create-button";
import { useRef } from "react";

const initialState: CreateFormState = {
  errors: {},
};

export default function CreateForm() {
  const [state, dispatch] = useFormState(create, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const createTodo = (payload: FormData) => {
    dispatch(payload);
    formRef?.current?.reset();
  };

  return (
    <form action={createTodo} ref={formRef} className="flex items-center gap-4">
      <Input type="text" name="title" />
      <CreateButton />
    </form>
  );
}
