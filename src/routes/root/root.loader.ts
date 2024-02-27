import { getForms } from "src/api";

export default async function rootLoader(): Promise<
  { id: string; name: string }[]
> {
  return await getForms();
}
