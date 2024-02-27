import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";

import { Theme } from "@radix-ui/themes";
import { FormityProvider } from "formity";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootRoute from "./routes/root/root";
import rootLoader from "./routes/root/root.loader";
import NewFormRoute from "./routes/root.new-form/new-form";
import newFormAction from "./routes/root.new-form/new-form.action";
import FormRoute from "./routes/root.form/form";
import FormRouteError from "./routes/root.form/form.error";
import formLoader from "./routes/root.form/form.loader";
import formAction from "./routes/root.form/form.action";
import EditFormRoute from "./routes/root.form.edit-form/edit-form";
import editFormLoader from "./routes/root.form.edit-form/edit-form.loader";
import editFormAction from "./routes/root.form.edit-form/edit-form.action";

import LayoutForm from "./components/layout-form";
import TextField from "./components/form/text-field";
import TextArea from "./components/form/text-area";
import Select from "./components/form/select";
import RadioGroup from "./components/form/radio-group";
import CheckboxGroup from "./components/form/checkbox-group";
import Slider from "./components/form/slider";
import Range from "./components/form/range";
import Back from "./components/back";
import Button from "./components/button";

const components = {
  LayoutForm,
  TextField,
  TextArea,
  Select,
  RadioGroup,
  CheckboxGroup,
  Slider,
  Range,
  Back,
  Button,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <NewFormRoute />,
        action: newFormAction,
      },
      {
        path: "forms/:slug",
        element: <FormRoute />,
        errorElement: <FormRouteError />,
        loader: formLoader,
        action: formAction,
      },
      {
        path: "forms/:slug/edit",
        element: <EditFormRoute />,
        loader: editFormLoader,
        action: editFormAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme appearance="dark" panelBackground="translucent">
      <FormityProvider components={components}>
        <RouterProvider router={router} />
      </FormityProvider>
    </Theme>
  </React.StrictMode>
);
