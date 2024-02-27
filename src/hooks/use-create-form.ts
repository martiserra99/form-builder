import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { createForm } from "src/api";

export default function useCreateForm() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (values: { name: string; description: string }) => {
      return createForm(values.name, values.description);
    },
    onSuccess: (id: string) => {
      queryClient.invalidateQueries({ queryKey: ["forms"] });
      navigate(`/forms/${id}`, { replace: true });
    },
  });
}
