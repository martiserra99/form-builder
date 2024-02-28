import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Formity, Value } from "formity";
import { Flex, Text } from "@radix-ui/themes";

import Center from "src/components/center";

import useForm from "src/hooks/use-form";

import Header from "./components/header";

import useDeleteForm from "src/hooks/use-delete-form";

import Result from "./components/result";

export default function FormRoute() {
  const { id } = useParams() as { id: string };

  const { data } = useForm(id);

  const deleteForm = useDeleteForm(id);

  const [result, setResult] = useState<Value>(null);

  useEffect(() => {
    setResult(null);
  }, [id]);

  async function handleSubmit(result: Value) {
    setResult(result);
  }

  function handleDelete() {
    deleteForm.mutate();
  }

  if (result) {
    return (
      <Center width="100%" height="100%">
        <Result result={result} />
      </Center>
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
          className="w-full max-w-[420px]"
        />
      </Center>
    </Flex>
  ) : (
    <Center width="100%" height="100%">
      <Text size="2">Loading...</Text>
    </Center>
  );
}
