// components
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
// utils
import { styled } from '@mui/material/styles';

export const PricingWrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(10.6, 4, 6.25),
  border: `1px solid ${theme.palette.divider}`,
  borderTop: 'none',
}));

export const Grid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 356px',
  columnGap: theme.spacing(4),
}));

export const ArrowIcon = styled(ArrowCircleRightOutlinedIcon)(({ theme }) => ({
  fontSize: 16,
  fill: theme.palette.primary.contrastText,
  marginLeft: theme.spacing(1),
}));

export const SecondaryText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));
