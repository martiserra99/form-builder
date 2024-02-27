import { ReloadIcon } from "@radix-ui/react-icons";
import { Link } from "@radix-ui/themes";
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
      text={
        <>
          Thanks for submitting the form! To see what you submitted click{" "}
          <Link
            href="https://k30abc.buildship.run/forms/id/data/index?id=RcokhaFzNZxqhfTPFaeD&index=0"
            target="_blank"
          >
            here
          </Link>
          .
        </>
      }
      buttonIcon={<ReloadIcon />}
      buttonText={<>Restart</>}
      buttonOnClick={handleRestart}
    />
  );
}
