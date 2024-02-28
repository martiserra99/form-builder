import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Box, Flex, Separator, Button, Text } from "@radix-ui/themes";
import { Link, useLocation } from "react-router-dom";
import { PlusIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

import useForms from "src/hooks/use-forms";

export default function Sidebar() {
  const { data } = useForms();
  return (
    <Flex direction="row" height="100%" className="w-[280px]">
      <Box p="3" grow="1">
        <Button asChild size="2" variant="surface" className="w-full">
          <Link to="/form-builder">
            <PlusIcon /> New Form
          </Link>
        </Button>
        <Separator size="4" my="3" />
        {data ? (
          <NavigationMenu.Root orientation="vertical">
            <NavigationMenu.List>
              {data.map(({ id, name }) => (
                <NavigationMenu.Item key={id}>
                  <NavLink to={`/form-builder/forms/${id}`}>{name}</NavLink>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>
        ) : (
          <Box className="px-4">
            <Text size="2">Loading...</Text>
          </Box>
        )}
      </Box>
      <Separator orientation="vertical" size="4" />
    </Flex>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const { pathname } = useLocation();
  const active = pathname.toLowerCase() === to.toLowerCase();
  return (
    <NavigationMenu.Link
      asChild
      className={classNames(
        "px-4 py-2 my-2 flex justify-start text-gray-12 rounded-2 border border-transparent hover:bg-accent-4 transition-colors duration-200 ease-in-out",
        { "bg-accent-4": active }
      )}
    >
      <Link to={to}>
        <Text size="2">{children}</Text>
      </Link>
    </NavigationMenu.Link>
  );
}
