import { ActionFunctionArgs, redirect } from "react-router-dom";

import { deleteForm } from "src/modules/storage";

export default async function formAction({ params }: ActionFunctionArgs) {
  const slug = params.slug as string;
  deleteForm(slug);
  return redirect("/");
}
