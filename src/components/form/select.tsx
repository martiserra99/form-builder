import { Controller, useFormContext } from "react-hook-form";
import { Text, Select as RadixSelect } from "@radix-ui/themes";

import Label from "src/components/label";
import ErrorMessage from "src/components/error-message";

interface SelectProps {
  label: string; // The label for the select
  name: string; // The name of the select
  list: { label: string; value: string; disabled?: boolean }[]; // The list of options
}

/**
 * It is a select of a form. It's value is of type string.
 * @param {SelectProps} props The props for the select component
 * @returns {JSX.Element} The select component
 */
function Select({ label, name, list }: SelectProps): JSX.Element {
  const { control, formState } = useFormContext();
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
          <RadixSelect.Root
            size="2"
            value={field.value}
            onValueChange={(value) => field.onChange(value)}
          >
            <RadixSelect.Trigger
              className="w-full"
              onBlur={field.onBlur}
              ref={field.ref}
            />
            <RadixSelect.Content position="popper">
              {list.map((item) => (
                <RadixSelect.Item
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                >
                  {item.label}
                </RadixSelect.Item>
              ))}
            </RadixSelect.Content>
          </RadixSelect.Root>
          {error && <ErrorMessage mt="1">{error.message}</ErrorMessage>}
        </Text>
      )}
    />
  );
}

export default Select;
