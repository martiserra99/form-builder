import { Box, Flex, Separator, Button } from "@radix-ui/themes";

import { Cross2Icon, Pencil2Icon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

interface HeaderProps {
  onDelete: () => void;
}

export default function Header({ onDelete }: HeaderProps) {
  return (
    <Box>
      <Box p="3">
        <Flex direction="row" justify="end" gap="3">
          <Button asChild variant="surface">
            <Link to="edit">
              <Pencil2Icon /> Edit
            </Link>
          </Button>
          <Button variant="surface" onClick={onDelete}>
            <Cross2Icon /> Delete
          </Button>
        </Flex>
      </Box>
      <Separator size="4" />
    </Box>
  );
}
