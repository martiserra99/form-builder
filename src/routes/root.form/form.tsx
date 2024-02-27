import { Value } from "formity";
import { useState } from "react";
import { useFetcher } from "react-router-dom";

import Form from "./components/form";
import Thanks from "./components/thanks";

export default function FormRoute() {
  const [data, setData] = useState<Value>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetcher = useFetcher();

  function handleSubmit(data: Value) {
    setData(data);
    setSubmitted(true);
  }

  function handleRestart() {
    setData(null);
    setSubmitted(false);
  }

  function handleDelete() {
    fetcher.submit(null, { method: "post" });
  }

  function handleSubmitError(error: unknown) {
    setError(error);
  }

  if (error) {
    throw error;
  }

  if (submitted) {
    return <Thanks data={data} onRestart={handleRestart} />;
  }

  return (
    <Form
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      onSubmitError={handleSubmitError}
    />
  );
}
