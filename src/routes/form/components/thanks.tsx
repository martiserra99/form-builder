import { ResetIcon } from "@radix-ui/react-icons";

import Message from "src/components/message";

export default function Thanks({ onBack }: { onBack: () => void }) {
  return (
    <Message
      heading={<>Thanks for submitting the form.</>}
      text={
        <>
          The form was correctly submitted. You can take a look at what you
          submitted at the database.
        </>
      }
      buttonIcon={<ResetIcon />}
      buttonText={<>Restart</>}
      buttonOnClick={onBack}
      buttonDisabled={false}
    />
  );
}
