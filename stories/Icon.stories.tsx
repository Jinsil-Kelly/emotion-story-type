/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Icon, { iconTypes } from 'components/Icon/Icon';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  component: Icon,
  title: 'components|Icon',
  decorators: [withKnobs],
};

export const icon = () => {
  const width = text('width', '');
  const height = text('height', '');
  const color = text('color', '');

  return <Icon width={width} icon="heart" color={color} height={height} />;
};

icon.story = {
  name: 'Default',
};

export const customSize = () => <Icon icon="heart" width="4rem" height="4rem" />;

export const customColor = () => <Icon icon="heart" color="red" />;

export const customizedWithStyle = () => (
  <Icon icon="heart" css={{ color: 'red', width: '4rem' }} />
);

const iconListStyle = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;

export const listOfIcons = () => {
  return (
    <ul css={iconListStyle}>
      {iconTypes.map(icon => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </ul>
  );
};
