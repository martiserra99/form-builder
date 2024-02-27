import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { deleteForm } from "src/api";

export default function useDeleteForm(id: string) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      return deleteForm(id);
    },
    onSuccess: () => {
      navigate("/", { replace: true });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["forms"] });
    },
  });
}