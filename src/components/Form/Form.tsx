/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import useForm, { FormContext } from 'react-hook-form';
import { ObjectSchema } from 'yup';
type FormProps = {
  children: React.ReactNode;
  defaultValues?: {
    [key: string]: any;
  };
  schema?: ObjectSchema;
};
const Form = ({ schema, defaultValues, children }: FormProps) => {
  const methods = useForm({
    defaultValues,
    validationSchema: schema,
  });
  const { handleSubmit } = methods;
  // useEffect(() => {
  //   return () => {
  //     reset();
  //   };
  //   // eslint-disable-next-line
  // }, []);
  return (
    <FormContext {...methods}>
      <form onSubmit={handleSubmit(data => console.log(data))}>{children}</form>
    </FormContext>
  );
};

export default Form;
