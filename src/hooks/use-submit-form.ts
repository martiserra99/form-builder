import { useMutation } from "@tanstack/react-query";
import { Value } from "formity";

import { submitForm } from "src/api";

export default function useSubmitForm(id: string) {
  return useMutation({
    mutationFn: async (data: Value) => {
      return submitForm(id, data);
    },
  });
}
