import { useFormityForm } from "formity";

import { Button } from "@radix-ui/themes";
import useSubmitting from "src/hooks/use-submitting";

interface BackProps {
  children: string; // The button text
}

/**
 * It is the back button of a form.
 * @param {BackProps} props The props of the back component
 * @returns {JSX.Element} The back component
 */
function Back({ children }: BackProps): JSX.Element {
  const { onBack } = useFormityForm();
  const isSubmitting = useSubmitting();
  return (
    <Button
      type="button"
      variant="outline"
      size="2"
      onClick={onBack}
      disabled={isSubmitting}
    >
      {children}
    </Button>
  );
}

export default Back;
