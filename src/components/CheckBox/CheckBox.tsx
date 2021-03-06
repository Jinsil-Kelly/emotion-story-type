/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CheckBoxStyle } from './CheckBoxStyle';
import { useFormContext } from 'react-hook-form';

type CheckBoxProps = {
  /** Content next to checkBox */
  content: string;
  /** checkBox name, should be unique*/
  name: string;
};
/** The `CheckBox` component is used to v....  */
const CheckBox = ({ content, name }: CheckBoxProps) => {
  const { register } = useFormContext();

  return (
    <CheckBoxStyle>
      <label className="checkBoxLabel">
        <input
          type="checkbox"
          className="checkBoxInput"
          ref={register}
          name={name}
        />
        <span className="checkBoxCustom" />
        <span className="checkBoxContent">{content}</span>
      </label>
    </CheckBoxStyle>
  );
};
CheckBox.defaultProps = {
  content: '',
};

export default CheckBox;
