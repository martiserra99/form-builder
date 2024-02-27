import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Formity, Value } from "formity";
import { Flex } from "@radix-ui/themes";

import Center from "src/components/center";

import useForm from "src/hooks/use-form";

import Header from "./components/header";
import ErrorMessage from "./components/error-message";
import SuccessMessage from "./components/success-message";

import useSubmitForm from "src/hooks/use-submit-form";
import useDeleteForm from "src/hooks/use-delete-form";

export default function FormRoute() {
  const { id } = useParams() as { id: string };

  const { data } = useForm(id);

  const submitForm = useSubmitForm(id);
  const deleteForm = useDeleteForm(id);

  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    submitForm.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function handleSubmit(value: Value) {
    await submitForm.mutateAsync(value);
  }

  function handleDelete() {
    deleteForm.mutate();
  }

  function handleError() {
    setError(true);
  }

  if (error) {
    return (
      <ErrorMessage onDelete={handleDelete} deleting={deleteForm.isPending} />
    );
  }

  if (submitForm.isSuccess) {
    return (
      <SuccessMessage
        index={submitForm.data}
        onRestart={() => submitForm.reset()}
      />
    );
  }

  return data ? (
    <Flex direction="column" width="100%" height="100%">
      <Header
        name={data.name}
        onDelete={handleDelete}
        deleting={deleteForm.isPending}
      />
      <Center grow="1">
        <Formity
          form={data.form}
          onSubmit={handleSubmit}
          onError={handleError}
        />
      </Center>
    </Flex>
  ) : null;
}
