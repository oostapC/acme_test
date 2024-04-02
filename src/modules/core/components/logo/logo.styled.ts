// components
import NextLink from 'next/link';
import Typography from '@mui/material/Typography';
// utils
import { styled } from '@mui/material/styles';

export const LogoWrapper = styled(NextLink)(({ theme }) => ({
  color: 'unset',
  textDecoration: 'unset',
  display: 'flex',
  gap: theme.spacing(1.25),
}));

export const SecondaryText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 500,
}));
