import { ActionFunctionArgs, redirect } from "react-router-dom";

import { createForm } from "src/api";

export default async function newFormAction({ request }: ActionFunctionArgs) {
  const data = await request.json();
  const name = data.name as string;
  const description = data.description as string;
  const id = await createForm(name, description);
  return redirect("/forms/" + id);
}
