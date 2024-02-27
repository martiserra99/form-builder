import { Button as RadixButton } from "@radix-ui/themes";

import useNavigating from "src/hooks/use-navigating";
import useSubmitting from "src/hooks/use-submitting";

interface ButtonProps {
  children: string; // The button text
}

/**
 * It is the submit button of a form.
 * @param {ButtonProps} props The props of the button component
 * @returns {JSX.Element} The button component
 */
function Button({ children }: ButtonProps): JSX.Element {
  const isNavigating = useNavigating();
  const isSubmitting = useSubmitting();
  return (
    <RadixButton type="submit" variant="solid" size="2" disabled={isNavigating}>
      {isSubmitting ? "Submitting..." : children}
    </RadixButton>
  );
}

export default Button;
