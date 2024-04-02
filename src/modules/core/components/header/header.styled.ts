// components
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MuiAppBar from '@mui/material/AppBar';
// utils
import { styled } from '@mui/material/styles';

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  position: 'fixed',
  zIndex: theme.zIndex.appBar,
  top: 0,
  left: 0,
  height: 40,
  boxShadow: 'none',
  color: 'unset',
  backgroundColor: theme.palette.common.white,
}));

export const Wrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1.25, 3, 1.25, 5),
  borderBottom: `1px solid ${theme.palette.divider}`,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.common.white,
}));

export const LogInButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
  color: theme.palette.text.primary,
  textTransform: 'none',
}));

export const StartNowButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0.5, 1.5),
  borderRadius: 5,
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.primary,
  textTransform: 'none',
}));

export const LogoWrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0.5, 1.25),
  marginLeft: theme.spacing(1),
  gap: theme.spacing(1),
  alignItems: 'center',
  flexDirection: 'row',
  color: theme.palette.common.white,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 6,
  backgroundColor: theme.palette.common.black,

  svg: {
    width: 16,
    height: 13,
  },
}));
