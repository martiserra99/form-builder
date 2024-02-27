import { LoaderFunctionArgs } from "react-router-dom";
import { JsonList } from "formity";

import { getForm } from "src/api";

export default async function formLoader({
  params,
}: LoaderFunctionArgs): Promise<JsonList | Response> {
  const id = params.id as string;
  const form = await getForm(id);
  return form.form;
}
