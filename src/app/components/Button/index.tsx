import styled, { css } from 'styled-components';
type ButtonType = {
  types?: string;
  size?: string;
};
export const Button = styled.button<ButtonType>`
  width: 100%;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1rem;
  border: transparent;
  ${props =>
    props.types === 'submit' &&
    css`
      background: #ff661a;
      color: #ffffff;
    `}
  ${props =>
    props.types === 'cancel' &&
    css`
      background: #f8f8f8;
      border: 1px solid #cccccc;
      color: #222222;
    `}
 ${props =>
    props.types === 'submitOutline' &&
    css`
      background: #ffffff;
      border: 1px solid #f23d3d;
      color: #f23d3d;
    `}
 ${props =>
    props.size === 'xs' &&
    css`
      height: 32px;
    `}
  ${props =>
    props.size === 'md' &&
    css`
      height: 40px;
    `}
   ${props =>
    props.size === 'lg' &&
    css`
      height: 48px;
    `}
`;
