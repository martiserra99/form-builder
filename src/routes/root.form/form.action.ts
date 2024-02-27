import { ActionFunctionArgs, redirect } from "react-router-dom";

import { deleteForm, createFormData } from "src/api";

export default async function formAction({
  params,
  request,
}: ActionFunctionArgs): Promise<Response> {
  const id = params.id as string;
  if (request.method === "POST") {
    const data = await request.json();
    const index = await createFormData(id, data);
    return redirect(`/forms/${id}/data/${index}`);
  } else {
    await deleteForm(id);
    return redirect("/");
  }
}
