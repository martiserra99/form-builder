import { useFormContext } from "react-hook-form";

import { Text, TextArea as RadixTextArea } from "@radix-ui/themes";

import Label from "src/components/label";
import ErrorMessage from "src/components/error-message";

interface TextAreaProps {
  label: string; // The label for the text area
  name: string; // The name of the text area
  placeholder: string; // The placeholder for the text area
}

/**
 * It is a text area of a form. It's value is of type string.
 * @param {TextAreaProps} props The props for the text area component
 * @returns {JSX.Element} The text area component
 */
function TextArea({ label, name, placeholder }: TextAreaProps): JSX.Element {
  const { register, formState } = useFormContext();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Text as="label" className="block w-full">
      <Label as="div" mb="1" error={error}>
        {label}
      </Label>
      <RadixTextArea
        size="2"
        autoComplete="off"
        placeholder={placeholder}
        {...register(name)}
        {...(error && { color: "red" })}
      />
      {error && <ErrorMessage mt="1">{error.message}</ErrorMessage>}
    </Text>
  );
}

export default TextArea;
