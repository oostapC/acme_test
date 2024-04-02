// components
import Stack from '@mui/material/Stack';
// utils
import { styled } from '@mui/material/styles';

export const ItemWrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1.25, 2),
  border: `1px solid ${theme.palette.divider}`,
  flexDirection: 'row',
  borderRadius: 100,
  gap: theme.spacing(0.5),
  maxHeight: 40,
  alignItems: 'center',
  backgroundColor: theme.palette.common.white,
}));

export const IconWrapper = styled(Stack)(({ theme }) => ({
  svg: {
    fontSize: 17,
  },
}));
