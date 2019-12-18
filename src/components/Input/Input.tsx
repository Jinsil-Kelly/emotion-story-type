/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import { labelStyle, inputStyle } from './InputStyle';
import { useFormContext } from 'react-hook-form';

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
  const methods = useFormContext();

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
        ref={methods.register}
      />
    </Fragment>
  );
};

export default Input;
