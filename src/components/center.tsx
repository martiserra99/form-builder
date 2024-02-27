import { Flex } from "@radix-ui/themes";

export default function Center({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  return (
    <Flex direction="row" justify="center" align="center" {...props}>
      {children}
    </Flex>
  );
}
