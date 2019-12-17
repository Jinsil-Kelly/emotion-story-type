/** @jsx jsx */
import { jsx } from '@emotion/core';
import { RadioButtonStyle } from './RadioButtonStyle';
import { useFormContext } from 'react-hook-form';
type RadioButtonProps = {
  /** Content next to RadioButton */
  content: string;
  name: string;
  value: any;
};
/** The `RadioButton` component is used to v....  */
const RadioButton = ({ name, value, content }: RadioButtonProps) => {
  const methods = useFormContext();
  return (
    <div>
      <RadioButtonStyle>
        <label className="radioButtonLabel">
          <input
            className="radioButtonInput"
            type="radio"
            ref={methods.register}
            value={value}
            name={name}
          />
          <span className="radioButtonCustom" />
          <span className="radioButtonContent">{content}</span>
        </label>
      </RadioButtonStyle>
    </div>
  );
};
RadioButton.defaultProps = {
  content: '',
};

export default RadioButton;
