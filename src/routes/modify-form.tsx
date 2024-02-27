import { useLocation, useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import LayoutForm from "src/components/layout-form";
import TextField from "src/components/form/text-field";
import TextArea from "src/components/form/text-area";
import Button from "src/components/button";
import Center from "src/components/center";
import useChangeForm from "src/hooks/use-change-form";

interface FormValues {
  name: string;
  description: string;
}

export default function ModifyFormRoute() {
  const { id } = useParams() as { id: string };

  const location = useLocation();

  const form = useForm<FormValues>({
    defaultValues: {
      name: location.state.name,
      description: "",
    },
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required("Required"),
        description: yup.string().required("Required"),
      })
    ),
  });

  const changeForm = useChangeForm(id);

  async function handleSubmit(values: FormValues) {
    await changeForm.mutateAsync(values);
  }

  return (
    <Center className="w-full h-full">
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormProvider {...form}>
          <LayoutForm
            heading="Modify the form"
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
            buttons={[<Button key="button">Modify</Button>]}
          />
        </FormProvider>
      </form>
    </Center>
  );
}
