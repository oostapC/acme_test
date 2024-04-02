// types
import type { ReactNode } from 'react';
import type { ButtonBaseProps } from '@mui/material';

export interface ButtonProps extends ButtonBaseProps {
  isDark?: boolean;
  children: ReactNode;
}
