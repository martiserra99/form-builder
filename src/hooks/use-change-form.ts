import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { changeForm } from "src/api";

export default function useChangeForm(id: string) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (values: { name: string; description: string }) => {
      return changeForm(id, values.name, values.description);
    },
    onSuccess: () => {
      navigate(`/forms/${id}`, { replace: true });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["forms", id] });
    },
  });
}
