import { ReloadIcon } from "@radix-ui/react-icons";
import { Value } from "formity";
import { useEffect } from "react";

import Message from "src/components/message";

interface ThanksProps {
  data: Value;
  onRestart: () => void;
}

export default function Thanks({ data, onRestart }: ThanksProps) {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Message
      heading={<>Thanks for submitting it!</>}
      text={
        <>
          Thanks for submitting the form! To see what you submitted look at the
          console.
        </>
      }
      buttonIcon={<ReloadIcon />}
      buttonText={<>Restart</>}
      buttonOnClick={onRestart}
    />
  );
}
