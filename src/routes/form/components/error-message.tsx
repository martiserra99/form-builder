import { Cross2Icon } from "@radix-ui/react-icons";

import Message from "src/components/message";

interface ErrorMessageProps {
  onDelete: () => void;
  deleting: boolean;
}

export default function ErrorMessage({
  onDelete,
  deleting,
}: ErrorMessageProps) {
  return (
    <Message
      heading={<>Something went wrong!</>}
      text={
        <>
          The form was not correctly generated. Try to delete the form and
          create it again.
        </>
      }
      buttonIcon={<Cross2Icon className="w-8 h-8" />}
      buttonText={<>Delete</>}
      buttonOnClick={onDelete}
      buttonDisabled={deleting}
    />
  );
}
