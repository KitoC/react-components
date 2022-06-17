import { FormProvider, UseFormProps, useForm } from "react-hook-form";

import React from "react";

export interface IFormConfig {
  formProps?: UseFormProps;
  onSubmit: (formValues: any) => void;
}

export interface IFormBuilderProps {
  formProps?: UseFormProps;
  onSubmit: (formValues: any) => void;
  children: React.ReactNode;
}

export const Form = (props: IFormBuilderProps) => {
  const { formProps, onSubmit, children } = props;
  const methods = useForm(formProps);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
