import styled, { css } from 'styled-components';
type ButtonType = {
  size?: 'xs' | 'md' | 'lg';
};
const renderSize = (size = 'md') => {
  if (size === 'xs') {
    return css`
      height: 32px;
    `;
  }
  if (size === 'md') {
    return css`
      height: 40px;
    `;
  }
  if (size === 'lg') {
    return css`
      height: 48px;
    `;
  }
};
export const Button = styled.button<ButtonType>`
  ${(props: ButtonType) => renderSize(props.size)}
`;
