import { LoaderFunctionArgs, redirect } from "react-router-dom";

import { getForm } from "src/api";

async function editFormLoader({
  params,
}: LoaderFunctionArgs): Promise<string | Response> {
  const id = params.id as string;
  const form = await getForm(id);
  if (!form) return redirect("/");
  return form.name;
}

export default editFormLoader;
