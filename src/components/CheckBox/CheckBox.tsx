/** @jsx jsx */
import { jsx } from '@emotion/core';
import { CheckBoxStyle } from './CheckBoxStyle';
type CheckBoxProps = {
  register: () => void;
  /** Content next to checkBox */
  content: string;
};
/** The `CheckBox` component is used to v....  */
const CheckBox = ({ register, content }: CheckBoxProps) => {
  return (
    <CheckBoxStyle>
      <label className="checkBoxLabel">
        <input type="checkbox" className="checkBoxInput" ref={register} />
        <span className="checkBoxCustom" />
        <span className="checkBoxContent">{content}</span>
      </label>
    </CheckBoxStyle>
  );
};
CheckBox.defaultProps = {
  register: () => console.log('register'),
  content: '',
};

export default CheckBox;
