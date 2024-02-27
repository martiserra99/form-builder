import { Controller, useFormContext } from "react-hook-form";
import { Flex, Text, Checkbox as RadixCheckbox, Box } from "@radix-ui/themes";

import Label from "src/components/label";
import ErrorMessage from "src/components/error-message";
import useSubmitting from "src/hooks/use-submitting";

interface CheckboxGroupProps {
  label: string; // The label for the checkbox group
  name: string; // The name of the checkbox group
  list: { label: string; value: string }[]; // The list of checkboxes
}

/**
 * It is a checkbox group of a form. It's value is of type string[].
 * @param {CheckboxGroupProps} props The props for the checkbox group component
 * @returns {JSX.Element} The checkbox group component
 */
function CheckboxGroup({ label, name, list }: CheckboxGroupProps): JSX.Element {
  const { control, formState } = useFormContext();
  const isSubmitting = useSubmitting();
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
                <Text as="label" key={item.value} size="2">
                  <Flex gap="2">
                    <RadixCheckbox
                      size="2"
                      variant="surface"
                      value={item.value}
                      checked={field.value.includes(item.value)}
                      onCheckedChange={() => {
                        if (field.value.includes(item.value)) {
                          const v = field.value.filter(
                            (v: string) => v !== item.value
                          );
                          field.onChange(v);
                        } else {
                          const v = [...field.value, item.value];
                          field.onChange(v);
                        }
                      }}
                      onBlur={field.onBlur}
                      ref={field.ref}
                      disabled={isSubmitting}
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
