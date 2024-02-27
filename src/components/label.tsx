import { Text } from "@radix-ui/themes";

interface LabelProps {
  children: string; // The label text
  error?: { message: string }; // The error message
  [key: string]: unknown; // The rest of the props
}

/**
 * It is a label for a form field.
 * @param {LabelProps} props The props of the label component
 * @returns {JSX.Element} The label component
 */
function Label({ children, error, ...props }: LabelProps): JSX.Element {
  return (
    <Text
      as="label"
      size="2"
      weight="medium"
      {...(error && { color: "red" })}
      {...props}
    >
      {children}
    </Text>
  );
}

export default Label;
