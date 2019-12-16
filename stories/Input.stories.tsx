/** @jsx jsx */
import { jsx } from '@emotion/core';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Input from 'components/Input/Input';

export default {
  title: 'components|Input',
  component: Input,
  decorators: [withKnobs],
};

export const input = () => {
  const label = text('label', '');
  const placeholder = text('placeholder', '');
  const name = text('name', '');
  const type = text('type', '');
  const initialValue = text('initialValue', '');

  return (
    <Input
      placeholder={placeholder}
      label={label}
      name={name}
      register={action('register')}
      initialValue={initialValue}
      type={type}
    />
  );
};
input.story = {
  name: 'Default',
};
