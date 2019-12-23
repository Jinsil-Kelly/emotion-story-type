import styled from 'utils/types';

export const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.error};
  // margin: 0;

  &:before {
    display: inline;
    content: '⚠ ';
  }
`;
