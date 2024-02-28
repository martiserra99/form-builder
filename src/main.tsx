import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";

import { Theme } from "@radix-ui/themes";
import { FormityProvider } from "formity";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

import App from "./app";

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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme appearance="dark" panelBackground="translucent">
      <FormityProvider components={components}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </FormityProvider>
    </Theme>
  </React.StrictMode>
);
