// components
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// utils
import { styled } from '@mui/material/styles';

export const SectionWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  border: `1px solid ${theme.palette.divider}`,
  borderTop: 'none',
}));

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(6.5),
  gap: theme.spacing(3),

  '&:last-child': {
    borderLeft: `1px dashed ${theme.palette.divider}`,
  },
}));

export const SecondaryText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
})) as typeof Typography;
