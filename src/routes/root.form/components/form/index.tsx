import { Formity, JsonList, Value } from "formity";
import { useLoaderData } from "react-router-dom";
import { Flex } from "@radix-ui/themes";

import Center from "src/components/center";
import Header from "./components/header";

interface FormProps {
  onSubmit: (data: Value) => void;
  onDelete: () => void;
  onSubmitError: (error: unknown) => void;
}

export default function Form({ onSubmit, onDelete, onSubmitError }: FormProps) {
  const form = useLoaderData() as JsonList;
  return (
    <Flex direction="column" width="100%" height="100%">
      <Header onDelete={onDelete} />
      <Center grow="1">
        <Formity
          form={form}
          onSubmit={onSubmit}
          onSubmitError={onSubmitError}
        />
      </Center>
    </Flex>
  );
}
