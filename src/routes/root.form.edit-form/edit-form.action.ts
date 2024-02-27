import { ActionFunctionArgs, redirect } from "react-router-dom";

import { modifyForm } from "src/api";

export default async function editFormAction({
  params,
  request,
}: ActionFunctionArgs) {
  const id = params.id as string;
  const data = await request.json();
  const name = data.name as string;
  const description = data.description as string;
  await modifyForm(id, name, description);
  return redirect("/forms/" + id);
}
