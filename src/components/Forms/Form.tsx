"use client"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type FormConfig ={
  defaultValues : Record<string, any>
}

type FormProps ={
  children: React.ReactNode
  submitHandler: SubmitHandler<any>
} & FormConfig

const Form = ({ children, submitHandler, defaultValues }: FormProps) => {
  const methods = useForm({
    defaultValues, // You can pass default values to useForm
  });

  const { handleSubmit } = methods; // Destructure handleSubmit from methods

  const onSubmit = (data) => {
    console.log(data);
    submitHandler(data); // Call the external submitHandler function
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
