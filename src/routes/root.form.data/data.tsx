import { ReloadIcon } from "@radix-ui/react-icons";
import { useNavigate, useParams } from "react-router-dom";

import Message from "src/components/message";

export default function DataRoute() {
  const params = useParams();
  const navigate = useNavigate();

  function handleRestart() {
    navigate(`/forms/${params.id}`);
  }

  return (
    <Message
      heading={<>Thanks for submitting it!</>}
      text={<>Thanks for submitting the form! {params.index}</>}
      buttonIcon={<ReloadIcon />}
      buttonText={<>Restart</>}
      buttonOnClick={handleRestart}
    />
  );
}
