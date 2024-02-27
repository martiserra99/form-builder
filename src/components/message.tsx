import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import Center from "./center";

export default function Message({
  heading,
  text,
  buttonText,
  buttonIcon,
  buttonOnClick,
}: {
  heading: React.ReactNode;
  text: React.ReactNode;
  buttonText: React.ReactNode;
  buttonIcon: React.ReactNode;
  buttonOnClick: () => void;
}) {
  return (
    <Center height="100%">
      <Box className="w-96 max-w-96">
        <Heading as="h2" align="center" mb="2">
          {heading}
        </Heading>
        <Text as="p" align="center" mb="4">
          {text}
        </Text>
        <Flex direction="row" justify="center" align="center">
          <Button onClick={buttonOnClick}>
            {buttonIcon} {buttonText}
          </Button>
        </Flex>
      </Box>
    </Center>
  );
}