import { Text } from "@radix-ui/themes";

interface ErrorMessageProps {
  children: string; // The error message
  [key: string]: unknown; // The rest of the props
}

/**
 * It is an error message for a form field.
 * @param {ErrorMessageProps} props The props of the error message component
 * @returns {JSX.Element} The error message component
 */
function ErrorMessage({ children, ...props }: ErrorMessageProps): JSX.Element {
  return (
    <Text as="p" size="2" color="red" {...props}>
      {children}
    </Text>
  );
}

export default ErrorMessage;
