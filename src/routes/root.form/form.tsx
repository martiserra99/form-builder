import { Value } from "formity";
import { useState } from "react";
import { useFetcher, useSubmit } from "react-router-dom";

import Form from "./components/form";

export default function FormRoute() {
  const [error, setError] = useState<unknown>(null);

  const submit = useSubmit();
  const fetcher = useFetcher();

  function handleSubmit(data: Value) {
    submit(data, { method: "post", encType: "application/json" });
  }

  function handleDelete() {
    fetcher.submit(null, { method: "delete" });
  }

  function handleSubmitError(error: unknown) {
    setError(error);
  }

  if (error) {
    throw error;
  }

  return (
    <Form
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      onSubmitError={handleSubmitError}
    />
  );
}
