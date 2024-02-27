import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoaderData, useSubmit } from "react-router-dom";
import * as yup from "yup";

import LayoutForm from "src/components/layout-form";
import TextField from "src/components/form/text-field";
import TextArea from "src/components/form/text-area";
import Button from "src/components/button";
import Center from "src/components/center";

interface FormValues {
  name: string;
  description: string;
}

export default function EditFormRoute() {
  const name = useLoaderData() as string;

  const form = useForm<FormValues>({
    defaultValues: {
      name: name,
      description: "",
    },
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required("Required"),
        description: yup.string().required("Required"),
      })
    ),
  });

  const submit = useSubmit();

  function handleSubmit({ name, description }: FormValues) {
    submit(
      { name, description },
      { method: "post", encType: "application/json" }
    );
  }

  return (
    <Center className="w-full h-full">
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormProvider {...form}>
          <LayoutForm
            heading="Edit the form"
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
                placeholder="Add a validation rule that checks that the number of hobbies is greater than 2."
              />,
            ]}
            buttons={[<Button key="button">Edit</Button>]}
          />
        </FormProvider>
      </form>
    </Center>
  );
}
