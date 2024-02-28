import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Formity, Value } from "formity";
import { Flex, Text } from "@radix-ui/themes";

import Center from "src/components/center";

import useForm from "src/hooks/use-form";

import Header from "./components/header";
import SuccessMessage from "./components/success-message";

import useSubmitForm from "src/hooks/use-submit-form";
import useDeleteForm from "src/hooks/use-delete-form";

export default function FormRoute() {
  const { id } = useParams() as { id: string };

  const { data } = useForm(id);

  const submitForm = useSubmitForm(id);
  const deleteForm = useDeleteForm(id);

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
          key={id}
          form={data.form}
          onSubmit={handleSubmit}
          className="w-full max-w-[680px]"
        />
      </Center>
    </Flex>
  ) : (
    <Center width="100%" height="100%">
      <Text size="2">Loading...</Text>
    </Center>
  );
}
