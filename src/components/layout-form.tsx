import { Grid, Flex, Heading, Separator, Card } from "@radix-ui/themes";

interface LayoutFormProps {
  heading: string; // The heading of the form
  fields: React.ReactNode[]; // The fields of the form
  buttons: React.ReactNode[]; // The buttons of the form
}

/**
 * It is the layout for a form.
 * @param {LayoutFormProps} props The props of the layout form component
 * @returns {JSX.Element} The layout form component
 */
function LayoutForm({
  heading,
  fields,
  buttons,
}: LayoutFormProps): JSX.Element {
  return (
    <Card size="3" variant="surface" className="w-full max-w-[680px]">
      <Heading size="3" trim="both">
        {heading}
      </Heading>
      <Separator size="4" className="mt-10 mb-8" />
      <Flex direction="column" gap="4" className="mb-8">
        {fields}
      </Flex>
      <Grid columns={`${buttons.length}`} gap="4">
        {buttons}
      </Grid>
    </Card>
  );
}

export default LayoutForm;
