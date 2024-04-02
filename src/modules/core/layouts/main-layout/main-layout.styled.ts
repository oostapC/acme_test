import Box from '@mui/material/Box';
// utils
import { styled } from '@mui/material/styles';

export const LayoutContent = styled(Box)(({ theme }) => ({
  flex: 1,
  position: 'relative',
  marginTop: theme.spacing(11.4),
  width: '100%',
  backgroundColor: theme.palette.background.paper,
}));
