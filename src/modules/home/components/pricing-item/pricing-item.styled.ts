// components
import Box from '@mui/material/Box';
import MuiDivider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
// utils
import { styled } from '@mui/material/styles';

export const ItemWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<{ isSelected: boolean }>(({ theme, isSelected }) => ({
  display: 'grid',
  gridTemplateColumns: '95px 1fr 20px',
  padding: theme.spacing(1, 5.75, 1, 3),
  border: `1px solid ${isSelected ? theme.palette.secondary.dark : theme.palette.divider}`,
  borderRadius: 12,
  minHeight: 65,
  alignItems: 'center',
  boxShadow:
    '0px 12px 24px 0px #0000000D, 0px 2px 4px 0px #0000000D, 0px 0px 0px 1px #00000012',
  backgroundColor: isSelected
    ? `${theme.palette.secondary.dark} 5%`
    : theme.palette.common.white,
}));

export const Divider = styled(MuiDivider)(({ theme }) => ({
  borderColor: theme.palette.secondary.contrastText,
  borderWidth: 1,
  height: '60%',
}));

export const SecondaryText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
})) as typeof Typography;
