import styled, { CreateStyled } from '@emotion/styled';

export type ThemeProps = {
  body: string;
  background: string;
  colors: {
    [key: string]: string;
  };
};
export default styled as CreateStyled<ThemeProps>;

export type selectBoxOptionsType = {
  value: string;
  label: string;
}[];
