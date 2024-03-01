import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import LayoutForm from "src/components/layout-form";
import TextField from "src/components/form/text-field";
import TextArea from "src/components/form/text-area";
import Center from "src/components/center";
import Button from "src/components/button";

import useCreateForm from "src/hooks/use-create-form";

interface FormValues {
  name: string;
  asks: string;
  returns: string;
}

export default function CreateFormRoute() {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      asks: "",
      returns: "",
    },
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required("Required"),
        asks: yup.string().required("Required"),
        returns: yup.string().required("Required"),
      })
    ),
  });

  const createForm = useCreateForm();

  async function handleSubmit({ name, asks, returns }: FormValues) {
    const s = (str: string) => str + (str[str.length - 1] === "." ? "" : ".");
    const description = `Form that asks ${s(asks)} It returns ${s(returns)}`;
    await createForm.mutateAsync({ name, description });
  }

  return (
    <Center className="w-full h-full">
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full max-w-[420px]"
      >
        <FormProvider {...form}>
          <LayoutForm
            heading="Create a new form"
            fields={[
              <TextField
                key="name"
                name="name"
                label="Name"
                placeholder="User hobbies"
              />,
              <TextArea
                key="asks"
                name="asks"
                label="Form that asks..."
                placeholder="what are your hobbies and for each hobby it asks why you like it."
              />,
              <TextArea
                key="returns"
                name="returns"
                label="It returns..."
                placeholder="the hobbies and the reasons why you like them."
              />,
            ]}
            buttons={[<Button key="button">Create</Button>]}
          />
        </FormProvider>
      </form>
    </Center>
  );
}
