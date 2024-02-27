import { useParams } from "react-router-dom";

import useForm from "src/hooks/use-form";

import Form from "./components/form";

export default function ChangeFormRoute() {
  const { id } = useParams() as { id: string };
  const { data } = useForm(id);
  return data ? <Form name={data.name} /> : null;
}
