import styled, { css } from 'styled-components';
type ButtonType = {
  size?: 'small' | 'normal' | 'large';
  types?: 'orange' | 'normal' | 'outlineOrange';
};
const renderSize = (size = 'normal') => {
  if (size === 'small') {
    return css`
      height: 32px;
    `;
  }
  if (size === 'normal') {
    return css`
      height: 40px;
    `;
  }
  if (size === 'large') {
    return css`
      height: 48px;
    `;
  }
};
const renderType = (size = 'normal') => {
  if (size === 'orange') {
    return css`
      color: #ffffff;
      background-color: #ff661a;
      border: 1px solid transparent;
    `;
  }
  if (size === 'normal') {
    return css`
      color: #222222;
      background-color: #f8f8f8;
      border: 1px solid #cccccc;
    `;
  }
  if (size === 'outlineOrange') {
    return css`
      color: #f23d3d;
      background-color: #ffffff;
      border: 1px solid #f23d3d;
    `;
  }
};
export const Button = styled.button<ButtonType>`
  font-size: 700;
  ${(props: ButtonType) => {
    return [renderSize(props.size), renderType(props.types)];
  }}
`;
