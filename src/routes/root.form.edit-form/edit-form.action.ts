import { ActionFunctionArgs, redirect } from "react-router-dom";

import { modifyForm } from "src/modules/api";
import { deleteForm, getForm, setForm } from "src/modules/storage";

import { toSlug } from "src/utils";
import { FormValues } from "src/types";

export default async function editFormAction({
  params,
  request,
}: ActionFunctionArgs) {
  const slug = params.slug as string;
  const form = getForm(slug);
  if (!form) {
    return redirect("/");
  }
  const { name, description } = (await request.json()) as FormValues;
  const newForm = {
    slug: toSlug(name),
    name: name,
    form: await modifyForm(form.form, description),
  };
  deleteForm(slug);
  setForm(newForm);
  return redirect("/forms/" + newForm.slug);
}
