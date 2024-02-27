import { useQuery } from "@tanstack/react-query";
import { getForms } from "src/api";

export default function useForms() {
  return useQuery<{ id: string; name: string }[]>({
    queryKey: ["forms"],
    queryFn: () => getForms(),
  });
}
