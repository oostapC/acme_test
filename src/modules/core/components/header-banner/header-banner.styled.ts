// components
import Stack from '@mui/material/Stack';
import NextLink from 'next/link';
import Typography from '@mui/material/Typography';
import ArrowFilledIcon from '@modules/core/assets/icons/arrow-filled';
// utils
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  padding: theme.spacing(1.25),
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(13),
}));

export const Link = styled(NextLink)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
  maxHeight: 18,
  color: 'unset',
  textDecoration: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ArrowIcon = styled(ArrowFilledIcon)(({ theme }) => ({
  height: 10,
}));
