import { Controller, useFormContext } from "react-hook-form";

import {
  Box,
  Flex,
  Text,
  RadioGroup as RadixRadioGroup,
} from "@radix-ui/themes";

import Label from "src/components/label";
import ErrorMessage from "src/components/error-message";
import useNavigating from "src/hooks/use-navigating";

interface RadioGroupProps {
  label: string; // The label for the radio group
  name: string; // The name of the radio group
  list: { label: string; value: string }[]; // The list of radio buttons
}

/**
 * It is a radio group of a form. It's value is of type string.
 * @param {RadioGroupProps} props The props for the radio group component
 * @returns {JSX.Element} The radio group component
 */
function RadioGroup({ label, name, list }: RadioGroupProps): JSX.Element {
  const { control, formState } = useFormContext();
  const isNavigating = useNavigating();
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
            size="2"
            value={field.value}
            onBlur={field.onBlur}
            onValueChange={(value) => field.onChange(value)}
            ref={field.ref}
            disabled={isNavigating}
          >
            <Flex direction="column" gap="1">
              {list.map((item, index) => (
                <Text
                  as="label"
                  key={index}
                  size="2"
                  {...(error && { color: "red" })}
                >
                  <Flex gap="2">
                    <RadixRadioGroup.Item value={item.value} />
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
