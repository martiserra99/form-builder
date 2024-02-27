import { useNavigation } from "react-router-dom";

export default function useSubmitting() {
  const navigation = useNavigation();
  return navigation.state !== "idle";
}
