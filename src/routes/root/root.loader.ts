import { getForms } from "src/modules/storage";

export default async function rootLoader() {
  return getForms();
}
