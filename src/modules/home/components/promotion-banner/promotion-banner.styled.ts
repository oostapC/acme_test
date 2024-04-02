// components
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// utils
import { styled } from '@mui/material/styles';

export const BannerWrapper = styled(Stack)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'none',
  border: 'unset',
  padding: theme.spacing(2.25, 0, 1.125),
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: theme.spacing(1.5),
}));

export const PromotionButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0.5, 1.5),
  borderRadius: 100,
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.primary,
  textTransform: 'none',
  gap: theme.spacing(1.25),
  backgroundColor: theme.palette.common.white,
  minHeight: 32,
}));

export const ArrowIcon = styled(ArrowForwardIosIcon)(({ theme }) => ({
  fontSize: 8,
}));

export const NewPill = styled(Stack)(({ theme }) => ({
  color: theme.palette.success.main,
  backgroundColor: theme.palette.success.light,
  borderRadius: 100,
  padding: theme.spacing(0.5, 1.25),
  maxHeight: 24,
  alignItems: 'center',
  justifyContent: 'center',

  p: {
    fontSize: 12,
  },
}));
