import { ThemeProvider as Provider } from '@mui/material/styles';
// constants
import theme from '@theme/theme';
// types
import type { FC, ReactNode } from 'react';
// constants

interface IProps {
  children: ReactNode;
}

const ThemeProvider: FC<IProps> = ({ children }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
