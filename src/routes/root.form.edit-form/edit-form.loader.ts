import { LoaderFunctionArgs, redirect } from "react-router-dom";

import { getForm } from "src/modules/storage";

export default function editFormLoader({ params }: LoaderFunctionArgs) {
  const slug = params.slug as string;
  const form = getForm(slug);
  if (!form) {
    return redirect("/");
  }
  return form.name;
}
