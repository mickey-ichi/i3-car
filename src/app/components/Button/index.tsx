import styled, { css } from 'styled-components';
type ButtonType = {
  size?: 'small' | 'normal' | 'large';
  types?: 'orange' | 'normal' | 'outlineOrange' | 'price' | 'outlineNormal';
};
const renderSize = (size = 'normal') => {
  if (size === 'small') {
    return css`
      height: 32px;
      font-size: 14px;
    `;
  }
  if (size === 'normal') {
    return css`
      height: 40px;
      font-size: 16px;
    `;
  }
  if (size === 'large') {
    return css`
      height: 48px;
      font-size: 16px;
    `;
  }
};
const renderType = (type = 'normal') => {
  if (type === 'orange') {
    return css`
      color: #ffffff;
      background-color: #ff661a;
      border: 1px solid transparent;
    `;
  }
  if (type === 'normal') {
    return css`
      color: #222222;
      background-color: #f8f8f8;
      border: 1px solid #cccccc;
    `;
  }
  if (type === 'outlineNormal') {
    return css`
      color: #222222;
      background-color: #ffffff;
      border: 1px solid #cccccc;
    `;
  }
  if (type === 'outlineOrange') {
    return css`
      color: #ff661a;
      background-color: #ffffff;
      border: 1px solid #ff661a;
    `;
  }
  if (type === 'price') {
    return css`
      color: #f23d3d;
      background-color: #ffffff;
      border: 1px solid #f23d3d;
    `;
  }
};
export const Button = styled.button<ButtonType>`
  font-weight: 700;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  ${(props: ButtonType) => {
    return [renderSize(props.size), renderType(props.types)];
  }}
`;
