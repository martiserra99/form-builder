import { Controller, useFormContext } from "react-hook-form";

import { Text, TextField as RadixTextField } from "@radix-ui/themes";

import Label from "src/components/label";
import ErrorMessage from "src/components/error-message";
import useNavigating from "src/hooks/use-navigating";

interface TextFieldProps {
  label: string; // The label for the text field
  name: string; // The name of the text field
  type?: "text" | "number"; // The type of the text field
  placeholder: string; // The placeholder for the text field
}

/**
 * It is a text field of a form. It's value is of type string.
 * @param {TextFieldProps} props The props for the text field component
 * @returns {JSX.Element} The text field component
 */
function TextField({
  label,
  name,
  type = "text",
  placeholder,
}: TextFieldProps): JSX.Element {
  const { control, formState } = useFormContext();
  const isNavigating = useNavigating();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Text as="label" className="block w-full">
          <Label as="div" mb="1" error={error}>
            {label}
          </Label>
          <RadixTextField.Input
            size="2"
            type={type}
            value={String(field.value)}
            onChange={(event) => {
              if (type === "number") field.onChange(Number(event.target.value));
              else field.onChange(event.target.value);
            }}
            autoComplete="off"
            placeholder={placeholder}
            disabled={isNavigating}
            {...(error && { color: "red" })}
          />
          {error && <ErrorMessage mt="1">{error.message}</ErrorMessage>}
        </Text>
      )}
    />
  );
}

export default TextField;
