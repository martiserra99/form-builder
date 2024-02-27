import { Outlet } from "react-router-dom";

import { Box, Flex } from "@radix-ui/themes";

import Sidebar from "./components/sidebar";

export default function LayoutRoute() {
  return (
    <Flex direction="row" className="h-screen">
      <Sidebar />
      <Box grow="1" height="100%">
        <Outlet />
      </Box>
    </Flex>
  );
}
