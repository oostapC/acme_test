// components
import MuiButton from '@mui/material/Button';
// utils
import { styled } from '@mui/material/styles';

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'isDark',
})<{ isDark: boolean }>(({ theme, isDark }) => ({
  color: isDark ? theme.palette.common.white : theme.palette.text.primary,
  textTransform: 'none',
  padding: theme.spacing(1, 2),
  minHeight: 40,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 6,
  minWidth: 'unset',
  backgroundColor: isDark
    ? theme.palette.common.black
    : theme.palette.common.white,
  boxShadow: '0px 2px 2px 0px #0000000A,  0px 0px 0px 1px #00000014',

  ...(isDark
    ? {
        '&:hover': {
          backgroundColor: theme.palette.common.black,
        },
      }
    : {}),
}));
