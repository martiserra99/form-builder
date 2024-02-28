import { useParams } from "react-router-dom";
import { Cross2Icon } from "@radix-ui/react-icons";

import Message from "src/components/message";
import useDeleteForm from "src/hooks/use-delete-form";

export default function FormError() {
  const { id } = useParams() as { id: string };

  const deleteForm = useDeleteForm(id);

  async function handleDelete() {
    await deleteForm.mutateAsync();
  }

  return (
    <Message
      heading={<>Something went wrong!</>}
      text={
        <>
          The form was not correctly generated. Try to delete the form and
          create it again.
        </>
      }
      buttonIcon={<Cross2Icon />}
      buttonText={<>Delete</>}
      buttonOnClick={handleDelete}
      buttonDisabled={deleteForm.isPending}
    />
  );
}
