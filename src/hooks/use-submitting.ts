import { useNavigation } from "react-router-dom";

export default function useSubmitting() {
  return useNavigation().state === "submitting";
}
