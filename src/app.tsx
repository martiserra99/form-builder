import { RouterProvider, createHashRouter } from "react-router-dom";

import LayoutRoute from "./routes/layout";
import CreateFormRoute from "./routes/create-form";
import FormRoute from "./routes/form";
import FormError from "./routes/form/index.error";

import ModifyFormRoute from "./routes/modify-form";

const router = createHashRouter([
  {
    path: "/form-builder",
    element: <LayoutRoute />,
    children: [
      { index: true, element: <CreateFormRoute /> },
      {
        path: "forms/:id",
        element: <FormRoute />,
        errorElement: <FormError />,
      },
      { path: "forms/:id/modify", element: <ModifyFormRoute /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
