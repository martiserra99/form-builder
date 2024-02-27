import { Controller, useFormContext } from "react-hook-form";
import { Flex, Text, Slider as RadixSlider } from "@radix-ui/themes";

import Label from "src/components/label";
import ErrorMessage from "src/components/error-message";
import useSubmitting from "src/hooks/use-submitting";

interface RangeProps {
  label: string; // The label for the range
  name: string; // The name of the range
  min?: number; // The minimum value of the range
  max?: number; // The maximum value of the range
  step?: number; // The step value of the range
  minStepsBetweenThumbs?: number; // The minimum steps between the thumbs
}

/**
 * It is a range of a form. It's value is of type number[].
 * @param {RangeProps} props The props for the range component
 * @returns {JSX.Element} The range component
 */
function Range({
  label,
  name,
  min = 0,
  max = 100,
  step = 1,
  minStepsBetweenThumbs = 1,
}: RangeProps): JSX.Element {
  const { control, formState } = useFormContext();
  const isSubmitting = useSubmitting();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Text as="label" size="2" className="block w-full">
          <Flex justify="between">
            <Label as="div" mb="1" error={error}>
              {label}
            </Label>
            <Text size="2">{field.value.join(" - ")}</Text>
          </Flex>
          <RadixSlider
            size="2"
            value={field.value}
            onValueChange={(value) => field.onChange(value)}
            onBlur={field.onBlur}
            ref={field.ref}
            min={min}
            max={max}
            step={step}
            minStepsBetweenThumbs={minStepsBetweenThumbs}
            disabled={isSubmitting}
            {...(error && { color: "red" })}
          />
          {error && <ErrorMessage mt="1">{error.message}</ErrorMessage>}
        </Text>
      )}
    />
  );
}

export default Range;
