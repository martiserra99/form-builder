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
  description: string;
}

export default function CreateFormRoute() {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      description: "",
    },
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required("Required"),
        description: yup.string().required("Required"),
      })
    ),
  });

  const createForm = useCreateForm();

  async function handleSubmit(values: FormValues) {
    await createForm.mutateAsync(values);
  }

  return (
    <Center className="w-full h-full">
      <form onSubmit={form.handleSubmit(handleSubmit)}>
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
                key="description"
                name="description"
                label="Description"
                placeholder="Form that asks the user what are his hobbies and for each hobby it asks why he likes it."
              />,
            ]}
            buttons={[<Button key="button">Create</Button>]}
          />
        </FormProvider>
      </form>
    </Center>
  );
}
