import { Controller, useFormContext } from "react-hook-form";

import {
  Box,
  Flex,
  Text,
  RadioGroup as RadixRadioGroup,
} from "@radix-ui/themes";

import Label from "src/components/label";
import ErrorMessage from "src/components/error-message";

interface RadioGroupProps {
  label: string; // The label for the radio group
  name: string; // The name of the radio group
  list:
    | { label: string; value: string }[]
    | { label: string; value: number }[]
    | { label: string; value: boolean }[]; // The list of radio buttons
  type?: "string" | "number" | "boolean"; // The type of the value
}

/**
 * It is a radio group of a form. It's value is of type string.
 * @param {RadioGroupProps} props The props for the radio group component
 * @returns {JSX.Element} The radio group component
 */
function RadioGroup({
  label,
  name,
  list,
  type = "string",
}: RadioGroupProps): JSX.Element {
  const { control, formState } = useFormContext();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Box>
          <Label mb="1" className="block w-full" error={error}>
            {label}
          </Label>
          <RadixRadioGroup.Root
            value={String(field.value)}
            onBlur={field.onBlur}
            onValueChange={(value) => {
              if (type === "number") field.onChange(Number(value));
              else if (type === "boolean") field.onChange(value === "true");
              else field.onChange(value);
            }}
            ref={field.ref}
          >
            <Flex direction="column" gap="1">
              {list.map((item) => (
                <Text
                  as="label"
                  key={String(item.value)}
                  size="2"
                  {...(error && { color: "red" })}
                >
                  <Flex gap="2">
                    <RadixRadioGroup.Item value={String(item.value)} />
                    {item.label}
                  </Flex>
                </Text>
              ))}
            </Flex>
          </RadixRadioGroup.Root>
          {error && <ErrorMessage mt="1">{error.message}</ErrorMessage>}
        </Box>
      )}
    />
  );
}

export default RadioGroup;
