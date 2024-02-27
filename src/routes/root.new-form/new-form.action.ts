import { ActionFunctionArgs, redirect } from "react-router-dom";

import { createForm } from "src/modules/api";
import { setForm } from "src/modules/storage";

import { toSlug } from "src/utils";
import { FormValues } from "src/types";

export default async function newFormAction({ request }: ActionFunctionArgs) {
  const { name, description } = (await request.json()) as FormValues;
  const newForm = {
    slug: toSlug(name),
    name: name,
    form: await createForm(description),
  };
  setForm(newForm);
  return redirect("/forms/" + newForm.slug);
}
