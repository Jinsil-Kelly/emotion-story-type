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

  return (
    <Input
      placeholder={placeholder}
      label={label}
      name={name}
      register={action('register')}
    />
  );
};
input.story = {
  name: 'Default',
};

//라벨을 가지는 인풋, 플레이스홀더 스토리, 디폴트값을 가지는 인풋 스토리
