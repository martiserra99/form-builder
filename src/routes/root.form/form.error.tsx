import { Cross2Icon } from "@radix-ui/react-icons";
import { useSubmit } from "react-router-dom";

import Message from "src/components/message";

export default function FormRouteError() {
  const submit = useSubmit();

  function handleSubmit() {
    submit(null, { method: "post" });
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
      buttonOnClick={handleSubmit}
    />
  );
}
