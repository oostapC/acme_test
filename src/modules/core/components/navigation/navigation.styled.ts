// components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
// utils
import { styled } from '@mui/material/styles';

export const MenuText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
}));

export const MenuList = styled(List)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1.125),
  padding: 0,

  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(0.5),
  },
}));

export const MenuListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  cursor: 'pointer',
  gap: theme.spacing(1.25),
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.spacing(1, 1),

  svg: {
    transform: `rotate(0deg)`,
    transition: 'transform 0.1s',
  },

  ...(isActive
    ? {
        p: {
          color: theme.palette.text.primary,
        },

        svg: {
          transform: `rotate(180deg)`,
          transition: 'transform 0.1s',
        },
      }
    : {}),

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0.5, 0.5),
  },
}));
