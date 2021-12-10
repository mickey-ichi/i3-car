import styled, { css } from 'styled-components';
type ButtonType = {
  size?: 'small' | 'normal' | 'large';
  color?: 'primary' | 'normal' | 'red' | 'blue';
  variant?: 'contained' | 'outlined';
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
const renderColor = (color = 'normal', variant = 'contained') => {
  if (color === 'primary') {
    if (variant === 'outlined') {
      return css`
        color: #ff661a;
        background-color: #ffffff;
        border: 1px solid #ff661a;
      `;
    }
    return css`
      color: #ffffff;
      background-color: #ff661a;
      border: 1px solid transparent;
    `;
  }
  if (color === 'normal') {
    if (variant === 'outlined') {
      return css`
        color: #222222;
        background-color: #ffffff;
        border: 1px solid #cccccc;
      `;
    }
    return css`
      color: #222222;
      background-color: #f8f8f8;
      border: 1px solid #cccccc;
    `;
  }
  if (color === 'red') {
    return css`
      color: #f23d3d;
      background-color: #ffffff;
      border: 1px solid #f23d3d;
    `;
  }
  if (color === 'blue') {
    if (variant === 'outlined') {
      return css`
        color: #1f4266;
        background-color: #ffffff;
        border: 1px solid #1f4266;
      `;
    }
    return css`
      color: #ffffff;
      background-color: #1f4266;
      border: 1px solid transparent;
    `;
  }
};
const renderDisabled = (variant = 'contained') => {
  if (variant === 'outlined') {
    return css`
      &:disabled {
        background-color: #ffffff;
        border: 1px solid #cccccc;
        color: #cccccc;
        cursor: default;
      }
    `;
  } else {
    return css`
      &:disabled {
        background-color: #cccccc;
        border: 1px solid transparent;
        color: #999999;
        cursor: default;
      }
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
    return [
      renderSize(props.size),
      renderColor(props.color, props.variant),
      renderDisabled(props.variant),
    ];
  }}
`;
