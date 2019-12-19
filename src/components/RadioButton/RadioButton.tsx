/** @jsx jsx */
import { jsx } from '@emotion/core';
import { RadioButtonStyle } from './RadioButtonStyle';
import { useFormContext } from 'react-hook-form';
type RadioButtonProps = {
  /** Content next to RadioButton */
  content: string;
  /** RadioButton name should be same */
  name: string;
  value: any;
};
/** The `RadioButton` component is used to v....  */
const RadioButton = ({ name, value, content }: RadioButtonProps) => {
  const { register } = useFormContext();
  return (
    <RadioButtonStyle>
      <label className="radioButtonLabel">
        <input
          className="radioButtonInput"
          type="radio"
          ref={register}
          value={value}
          name={name}
        />
        <span className="radioButtonCustom" />
        <span className="radioButtonContent">{content}</span>
      </label>
    </RadioButtonStyle>
  );
};
RadioButton.defaultProps = {
  content: '',
};

export default RadioButton;
