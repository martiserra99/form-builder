import { JsonList } from "formity";

import constants from "src/constants";

export async function createForm(prompt: string): Promise<JsonList> {
  const response = await fetch(`${constants.apiUrl}/form`, {
    method: "post",
    body: JSON.stringify({ prompt }),
    headers: { "Content-Type": "application/json" },
  });
  const json = await response.json();
  return json.form as JsonList;
}

export async function modifyForm(
  form: JsonList,
  prompt: string
): Promise<JsonList> {
  const response = await fetch(`${constants.apiUrl}/form/update`, {
    method: "post",
    body: JSON.stringify({ form, prompt }),
    headers: { "Content-Type": "application/json" },
  });
  const json = await response.json();
  return json.form as JsonList;
}
