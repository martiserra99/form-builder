import { Routes, Route } from "react-router-dom";

import LayoutRoute from "./routes/layout";
import CreateFormRoute from "./routes/create-form";
import FormRoute from "./routes/form/form";
import ModifyFormRoute from "./routes/modify-form";

import { Text } from "@radix-ui/themes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutRoute />}>
        <Route index element={<CreateFormRoute />} />
        <Route
          path="forms/:id"
          element={<FormRoute />}
          errorElement={<Text>fdasfdasfasfsa</Text>}
        />
        <Route path="forms/:id/modify" element={<ModifyFormRoute />} />
      </Route>
    </Routes>
  );
}
