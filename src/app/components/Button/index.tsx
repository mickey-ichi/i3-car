import styled, { css } from 'styled-components';
type ButtonType = {
  size?: 'small' | 'normal' | 'large';
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
export const Button = styled.button<ButtonType>`
  ${(props: ButtonType) => renderSize(props.size)}
`;
