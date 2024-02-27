import { Box, Flex, Heading, Separator } from "@radix-ui/themes";

export default function Header() {
  return (
    <Box>
      <Box p="3">
        <Flex direction="row" justify="start">
          <Heading size="3">Form Builder</Heading>
        </Flex>
      </Box>
      <Separator size="4" />
    </Box>
  );
}
