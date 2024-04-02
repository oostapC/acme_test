// components
import Stack from '@mui/material/Stack';
// utils
import { styled } from '@mui/material/styles';

export const ServersWrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(6, 11.25),
  border: `1px solid ${theme.palette.divider}`,
  borderTop: 'none',
  flexDirection: 'row',
}));
