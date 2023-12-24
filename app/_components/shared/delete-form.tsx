"use client";

import { remove } from "@/app/_actions/todo";
import { useFormState } from "react-dom";
import DeleteButton from "./delete-button";

export default function DeleteForm({ id }: { id: number }) {
  const [state, dispatchRemove] = useFormState(remove.bind(null, id), null);

  return (
    <form action={dispatchRemove}>
      <DeleteButton />
    </form>
  );
}
