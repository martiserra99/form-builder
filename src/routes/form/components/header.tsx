import { Box, Flex, Separator, Button } from "@radix-ui/themes";

import { Cross2Icon, Pencil2Icon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

interface HeaderProps {
  name: string;
  onDelete: () => void;
  deleting: boolean;
}

export default function Header({ name, onDelete, deleting }: HeaderProps) {
  return (
    <Box>
      <Box p="3">
        <Flex direction="row" justify="end" gap="3">
          <Button asChild variant="surface" disabled={deleting}>
            <Link to="modify" state={{ name }}>
              <Pencil2Icon /> Edit
            </Link>
          </Button>
          <Button variant="surface" onClick={onDelete} disabled={deleting}>
            <Cross2Icon /> Delete
          </Button>
        </Flex>
      </Box>
      <Separator size="4" />
    </Box>
  );
}
