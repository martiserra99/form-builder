import { useQuery } from "@tanstack/react-query";
import { JsonList } from "formity";

import { getForm } from "src/api";

export default function useForm(id: string) {
  return useQuery<{ name: string; form: JsonList }>({
    queryKey: ["forms", id],
    queryFn: () => getForm(id),
  });
}
