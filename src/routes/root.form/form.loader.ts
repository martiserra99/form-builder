import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { JsonList } from "formity";

import { getForm } from "src/api";

export default async function formLoader({
  params,
}: LoaderFunctionArgs): Promise<JsonList | Response> {
  const id = params.id as string;
  const form = await getForm(id);
  if (!form) return redirect("/");
  return form.form;
}
