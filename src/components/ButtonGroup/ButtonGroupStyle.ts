import { css } from '@emotion/core';
// direction 에 따라 margin-left 또는 margin-top 설정
const gapStyle = (direction: 'row' | 'column', gap: number | string) => {
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    'button + button': {
      [marginType]: gap,
    },
  });
};

const rightAlignStyle = css`
  justify-content: flex-end;
`;
export { gapStyle, rightAlignStyle };
