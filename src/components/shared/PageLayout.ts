import styled from 'utils/types';

export const Container = styled.div`
  background: ${props => props.theme.body};
  color: ${props => props.theme.fontColor[`${props.color}`]};
  max-width: 960px;
  padding: 15px;
  margin: 0 auto;
`;
