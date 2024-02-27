import { Controller, useFormContext } from "react-hook-form";
import { Flex, Text, Slider as RadixSlider } from "@radix-ui/themes";

import Label from "src/components/label";
import ErrorMessage from "src/components/error-message";
import useSubmitting from "src/hooks/use-submitting";

interface SliderProps {
  label: string; // The label for the slider
  name: string; // The name of the slider
  min?: number; // The minimum value of the slider
  max?: number; // The maximum value of the slider
  step?: number; // The step value of the slider
}

/**
 * It is a slider of a form. It's value is of type number.
 * @param {SliderProps} props The props for the slider component
 * @returns {JSX.Element} The slider component
 */
function Slider({
  label,
  name,
  min = 0,
  max = 100,
  step = 1,
}: SliderProps): JSX.Element {
  const { control, formState } = useFormContext();
  const isSubmitting = useSubmitting();
  const error = formState.errors[name] as { message: string } | undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Text as="label" className="block w-full">
          <Flex justify="between">
            <Label as="div" mb="1" error={error}>
              {label}
            </Label>
            <Text size="2">{field.value}</Text>
          </Flex>
          <RadixSlider
            size="2"
            value={[field.value]}
            onValueChange={([value]) => field.onChange(value)}
            onBlur={field.onBlur}
            ref={field.ref}
            min={min}
            max={max}
            step={step}
            disabled={isSubmitting}
          />
          {error && <ErrorMessage mt="1">{error.message}</ErrorMessage>}
        </Text>
      )}
    />
  );
}

export default Slider;
