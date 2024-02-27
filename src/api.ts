import { JsonList } from "formity";

import constants from "src/constants";

/**
 * It returns the list of forms (ids and names).
 * @returns The list of forms (ids and names).
 */
export async function getForms(): Promise<{ id: string; name: string }[]> {
  const response = await fetch(`${constants.apiUrl}/forms`);
  return await response.json();
}

/**
 * It returns the JsonList of a form by its id.
 * @param id The id of the form.
 * @returns The JsonList of the form.
 */
export async function getForm(
  id: string
): Promise<{ name: string; form: JsonList }> {
  const response = await fetch(`${constants.apiUrl}/forms/id?id=${id}`);
  const form = await response.json();
  if (form) return form;
  throw new Error("Form not found");
}

/**
 * It creates a new form and returns its id.
 * @param name The name of the form.
 * @param description The description of how to generate the form.
 * @returns The id of the new form.
 */
export async function createForm(
  name: string,
  description: string
): Promise<string> {
  const response = await fetch(`${constants.apiUrl}/forms`, {
    method: "post",
    body: JSON.stringify({ name, description }),
    headers: { "Content-Type": "application/json" },
  });
  const json = await response.json();
  return json.id;
}

/**
 * It modifies a form.
 * @param id The id of the form.
 * @param name The new name of the form.
 * @param description The description of the changes of the form.
 */
export async function changeForm(
  id: string,
  name: string,
  description: string
): Promise<void> {
  await fetch(`${constants.apiUrl}/forms/id`, {
    method: "put",
    body: JSON.stringify({ id, name, description }),
    headers: { "Content-Type": "application/json" },
  });
}

/**
 * It deletes a form.
 * @param id The id of the form.
 */
export async function deleteForm(id: string): Promise<void> {
  await fetch(`${constants.apiUrl}/forms/id`, {
    method: "delete",
    body: JSON.stringify({ id }),
    headers: { "Content-Type": "application/json" },
  });
}

/**
 * It creates form data.
 * @param id The id of the form.
 * @param data The data to be added to the form.
 */
export async function submitForm(id: string, data: unknown) {
  const response = await fetch(`${constants.apiUrl}/forms/id/data`, {
    method: "post",
    body: JSON.stringify({ id, data }),
    headers: { "Content-Type": "application/json" },
  });
  const json = await response.json();
  return json.index;
}
