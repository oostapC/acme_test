// components
import Stack from '@mui/material/Stack';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
// utils
import { styled } from '@mui/material/styles';

export const CardWrapper = styled(Stack)(({ theme }) => ({
  borderRadius: 12,
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow:
    '0px 24px 68px 0px #2121261A, 0px 4px 6px 0px #21212614, 0px 0px 0px 1px #1313160D, 0px 1px 1px 0px #0000000D, 0px 10px 32px 0px #21212626',
  padding: theme.spacing(3, 3, 3),

  button: {
    width: '92%',
    margin: '0 auto',
  },
}));

export const ListItem = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.primary.contrastText,

  svg: {
    fill: theme.palette.primary.contrastText,
    fontSize: 10,
  },
}));

export const ArrowIcon = styled(ArrowForwardOutlinedIcon)(({ theme }) => ({
  fontSize: 12,

  svg: {
    fill: theme.palette.common.white,
  },
}));
