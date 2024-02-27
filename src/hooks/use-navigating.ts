import { useNavigation } from "react-router-dom";

export default function useNavigating() {
  return useNavigation().state !== "idle";
}
