import { css } from '@emotion/core';
const labelStyle = css`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: #ec5990;
  font-size: 14px;
  font-weight: 200;
`;

const inputStyle = css`
  outline: none;
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ec5990;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    opacity: 0.4;
  }
`;

export { inputStyle, labelStyle };
