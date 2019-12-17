import styled, { CreateStyled } from '@emotion/styled';

export type Theme = {
  body: string;
  background: string;
  colors: {
    [key: string]: string;
  };
};
export default styled as CreateStyled<Theme>;
