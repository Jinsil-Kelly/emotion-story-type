/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import { labelStyle, inputStyle } from './InputStyle';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from 'components/shared/ErrorMessage';

type InputProps = {
  /** Input type */
  type?: string;
  /** Input name */
  name: string;
  /** Input label */
  label?: string;
  placeholder?: string;
  initialValue?: string;
};

/** The `Input` component is used to .....  */
const Input = ({ type, name, placeholder, initialValue, label }: InputProps) => {
  const { register, errors } = useFormContext();

  return (
    <Fragment>
      {label && (
        <label htmlFor={name} css={[labelStyle]}>
          {label}
        </label>
      )}
      <input
        css={[inputStyle]}
        defaultValue={initialValue}
        type={type}
        placeholder={placeholder}
        name={name}
        ref={register}
      />
      {errors[name] && <ErrorMessage>{errors[name]!.message}</ErrorMessage>}
    </Fragment>
  );
};
//https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined
export default Input;
