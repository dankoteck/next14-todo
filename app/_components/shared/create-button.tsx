import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

export default function CreateButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? "Loading..." : "Add"}
    </Button>
  );
}
