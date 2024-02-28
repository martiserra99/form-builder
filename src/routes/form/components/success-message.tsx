import { useParams } from "react-router-dom";
import { Link } from "@radix-ui/themes";
import { ReloadIcon } from "@radix-ui/react-icons";

import Message from "src/components/message";

import constants from "src/constants";

interface SuccessMessageProps {
  index: number;
  onRestart: () => void;
}

export default function SuccessMessage({
  index,
  onRestart,
}: SuccessMessageProps) {
  const { id } = useParams() as { id: string };
  return (
    <Message
      heading={<>Thanks for submitting it!</>}
      text={
        <>
          Thanks for submitting the form! To see what you submitted click{" "}
          <Link
            target="_blank"
            href={`${constants.apiUrl}/forms/id/data/index?id=${id}&index=${index}`}
          >
            here
          </Link>
          .
        </>
      }
      buttonIcon={<ReloadIcon />}
      buttonText={<>Restart</>}
      buttonOnClick={onRestart}
      buttonDisabled={false}
    />
  );
}
