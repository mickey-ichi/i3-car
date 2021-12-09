import styled from 'styled-components';
type ButtonType = {
  display?: string;
  justifyContent?: string;
  alignItems?: string;

  margin?: string | number;
  padding?: string | number;
  width?: string | number;
  height?: string | number;

  fontWeight?: number;
  fontFamily?: string;
  fontSize?: string;
  lineHeight?: number;
  backgroundColor?: string;
  color?: string;

  borderRadius?: string;
  outline?: string;
  border?: string;
  cursor?: string;
  boxShadow?: string;

  displayHover?: string;
  backgroundColorHover?: string;
  colorHover?: string;
  outlineHover?: string;
  borderHover?: string;
  cursorHover?: string;

  displayActive?: string;
  backgroundColorActive?: string;
  colorActive?: string;
  outlineActive?: string;
  borderActive?: string;
  cursorActive?: string;
};
export const Button = styled.button<ButtonType>`
  box-sizing: border-box;

  display: ${props => props.display || 'block'};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};

  margin: ${props => props.margin || 0}px;
  padding: ${props => props.padding || 0};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '40px'};

  font-family: ${props => props.fontWeight || ' Open Sans'};
  font-weight: ${props => props.fontWeight || 400};
  font-size: ${props => props.fontSize || '1rem'};
  line-height: ${props => props.lineHeight || 1};

  background-color: ${props => props.backgroundColor || 'transparent'};
  color: ${props => props.color || '#000000'};
  border-radius: ${props => props.borderRadius || 0};
  outline: ${props => props.outline || 'transparent'};
  border: ${props => props.border || 'transparent'};
  cursor: ${props => props.cursor || 'default'};

  &:hover {
    display: ${props => props.displayHover};
    background-color: ${props => props.backgroundColorHover};
    color: ${props => props.colorHover};
    outline: ${props => props.outlineHover};
    border: ${props => props.borderHover};
    cursor: ${props => props.cursorHover};
  }
  &:active {
    display: ${props => props.displayActive};
    background-color: ${props => props.backgroundColorActive};
    color: ${props => props.colorActive};
    outline: ${props => props.outlineActive};
    border: ${props => props.borderActive};
    cursor: ${props => props.cursorActive};
  }
`;
