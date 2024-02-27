import { ActionFunctionArgs, redirect } from "react-router-dom";

import { deleteForm } from "src/api";

export default async function formAction({
  params,
}: ActionFunctionArgs): Promise<Response> {
  const id = params.id as string;
  await deleteForm(id);
  return redirect("/");
}
