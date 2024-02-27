import { Outlet } from "react-router-dom";

import { Box, Flex } from "@radix-ui/themes";

import Header from "./components/header";
import Sidebar from "./components/sidebar";

export default function LayoutRoute() {
  return (
    <Flex direction="column" className="h-screen">
      <Header />
      <Flex direction="row" grow="1">
        <Sidebar />
        <Box grow="1" height="100%">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
}
