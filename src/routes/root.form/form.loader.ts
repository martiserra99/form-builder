import { LoaderFunctionArgs, redirect } from "react-router-dom";

import { getForm } from "src/modules/storage";

export default function formLoader({ params }: LoaderFunctionArgs) {
  const slug = params.slug as string;
  const form = getForm(slug);
  if (!form) {
    return redirect("/");
  }
  return form.form;
}
