import { useFormContext } from "react-hook-form";

import { Button as RadixButton } from "@radix-ui/themes";

interface ButtonProps {
  children: string; // The button text
}

/**
 * It is the submit button of a form.
 * @param {ButtonProps} props The props of the button component
 * @returns {JSX.Element} The button component
 */
function Button({ children }: ButtonProps): JSX.Element {
  const { formState } = useFormContext();
  return (
    <RadixButton
      type="submit"
      variant="solid"
      size="2"
      disabled={formState.isSubmitting}
    >
      {formState.isSubmitting ? "Submitting..." : children}
    </RadixButton>
  );
}

export default Button;
