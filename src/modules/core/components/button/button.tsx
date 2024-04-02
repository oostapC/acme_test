// types
import type { FC } from 'react';
import type { ButtonProps } from './button.interface';
// styles
import { StyledButton } from './button.styled';

const Button: FC<ButtonProps> = ({ children, isDark = false }) => (
  <StyledButton isDark={isDark}>{children}</StyledButton>
);

export default Button;
