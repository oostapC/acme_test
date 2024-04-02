import { useCallback, type FC } from 'react';
// hooks
import { useTheme } from '@mui/material/styles';
// components
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@modules/core/components/button';
import Typography from '@mui/material/Typography';
// styles
import {
  SecondaryText,
  SectionWrapper,
  ContentWrapper,
} from './contact-us.styled';

const ContactUs: FC = () => {
  const theme = useTheme();

  const renderColoredText = useCallback(
    (text: string, color: string) => (
      <Typography variant='h3' component='span' fontWeight={600} color={color}>
        {text}
      </Typography>
    ),
    [],
  );

  return (
    <SectionWrapper>
      <ContentWrapper>
        <Box>
          {renderColoredText('Ready to profit? ', theme.palette.common.black)}
          {renderColoredText(
            'Start journaling your trades. Check out ',
            theme.palette.secondary.contrastText,
          )}
          {renderColoredText('VPS Lite ', theme.palette.common.black)}
          {renderColoredText('or ', theme.palette.secondary.contrastText)}
          {renderColoredText('VPS Pro ', theme.palette.secondary.dark)}
          {renderColoredText('or ', theme.palette.secondary.contrastText)}
          {renderColoredText('VPS Max', theme.palette.primary.main)}
        </Box>
        <Stack direction='row' columnGap={2}>
          <Button isDark>Deploy Now</Button>
          <Button>View Dedicated Servers</Button>
        </Stack>
      </ContentWrapper>
      <ContentWrapper>
        <Box>
          <Typography variant='h4' component='span' fontWeight={500}>
            Trial acme{' '}
          </Typography>
          <SecondaryText variant='h4' component='span' fontWeight={500}>
            to see how our performance and ease of use through our Control
            Panel.
          </SecondaryText>
        </Box>
        <Button>Money Back Gaurauntee</Button>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default ContactUs;
