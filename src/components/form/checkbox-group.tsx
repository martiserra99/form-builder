import { Controller, useFormContext } from "react-hook-form";
import { Flex, Text, Checkbox as RadixCheckbox, Box } from "@radix-ui/themes";

import Label from "src/components/label";
import ErrorMessage from "src/components/error-message";

interface CheckboxGroupProps {
  label: string; // The label for the checkbox group
  name: string; // The name of the checkbox group
  list:
    | { label: string; value: string }[]
    | { label: string; value: number }[]
    | { label: string; value: boolean }[]; // The list of checkboxes
}

/**
 * It is a checkbox group of a form. It's value is of type string[].
 * @param {CheckboxGroupProps} props The props for the checkbox group component
 * @returns {JSX.Element} The checkbox group component
 */
function CheckboxGroup({ label, name, list }: CheckboxGroupProps): JSX.Element {
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
          <Flex direction="column" gap="1">
            {list.map((item) => {
              return (
                <Text as="label" key={String(item.value)} size="2">
                  <Flex gap="2">
                    <RadixCheckbox
                      size="2"
                      variant="surface"
                      value={String(item.value)}
                      checked={field.value.includes(item.value)}
                      onCheckedChange={() => {
                        if (field.value.includes(item.value)) {
                          const value = field.value.filter(
                            (value: string | number | boolean) => {
                              return value !== item.value;
                            }
                          );
                          field.onChange(value);
                        } else {
                          const value = [...field.value, item.value];
                          field.onChange(value);
                        }
                      }}
                      onBlur={field.onBlur}
                      ref={field.ref}
                      {...(error && { color: "red" })}
                    />
                    {item.label}
                  </Flex>
                </Text>
              );
            })}
          </Flex>
          {error && <ErrorMessage mt="1">{error.message}</ErrorMessage>}
        </Box>
      )}
    />
  );
}

export default CheckboxGroup;
