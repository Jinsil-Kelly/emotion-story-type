/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import { labelStyle, inputStyle } from './InputStyle';

type InputProps = {
  register: () => void;
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
const Input = ({
  register,
  type,
  name,
  placeholder,
  initialValue,
  label,
}: InputProps) => {
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
    </Fragment>
  );
};

export default Input;
