import { equalSlugs } from "src/utils";
import { Form } from "src/types";

export function getForms(): Form[] {
  return getLocalStorage("forms", []) as Form[];
}

export function setForms(forms: Form[]): void {
  setLocalStorage("forms", forms);
}

export function getForm(slug: string): Form | undefined {
  const forms = getForms();
  return forms.find((f) => equalSlugs(f.slug, slug));
}

export function setForm(form: Form): void {
  const forms = getForms();
  const index = forms.findIndex((f) => equalSlugs(f.slug, form.slug));
  if (index === -1) forms.push(form);
  else forms[index] = form;
  setForms(forms);
}

export function deleteForm(slug: string): void {
  const forms = getForms();
  const index = forms.findIndex((f) => equalSlugs(f.slug, slug));
  if (index !== -1) {
    forms.splice(index, 1);
    setForms(forms);
  }
}

function setLocalStorage(key: string, value: unknown): void {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key: string, defaultValue: unknown = null): unknown {
  const value = localStorage.getItem(key);
  if (value) return JSON.parse(value);
  return defaultValue;
}
