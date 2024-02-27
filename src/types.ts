import { JsonList } from "formity";

export interface Form {
  slug: string;
  name: string;
  form: JsonList;
}

export interface FormValues {
  name: string;
  description: string;
}
