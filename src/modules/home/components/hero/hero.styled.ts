// components
import Stack from '@mui/material/Stack';
import Button from '@modules/core/components/button';
import LogoWhiteIcon from '@modules/core/assets/icons/logo-white';
// utils
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: 181,
  width: '100%',
}));

export const LogoIcon = styled(LogoWhiteIcon)(({ theme }) => ({
  fontSize: 16,
  margin: theme.spacing(0, 0.825, 0, 1.375),
}));

export const HeroWrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(11),
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.divider}`,
}));

export const SecondaryText = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  fontWeight: 500,
}));

export const Frame = styled(Stack)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(8.625, 0, 6.5),
  gap: theme.spacing(4.5),
}));
