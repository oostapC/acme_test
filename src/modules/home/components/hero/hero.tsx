// components
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// types
import type { FC } from 'react';
// styles
import {
  Frame,
  LogoIcon,
  HeroWrapper,
  StyledButton,
  SecondaryText,
} from './hero.styled';

const Hero: FC = () => (
  <HeroWrapper>
    <Frame>
      <Typography variant='h1' component='p' pl={4} pr={4} letterSpacing={-2.4}>
        Lorem Ipsum.
        <SecondaryText>
          Testing, <br />
          testing, and testing on our fast, low latency hardware.
        </SecondaryText>
      </Typography>
      <Stack direction='row' columnGap={3} justifyContent='center'>
        <StyledButton isDark>
          <LogoIcon />
          <Typography variant='h4' component='p' pr={2.5}>
            Lorem Ipsum
          </Typography>
        </StyledButton>
        <StyledButton>
          <Typography variant='h4' component='p' pl={4} pr={4}>
            Lorem Ipsum
          </Typography>
        </StyledButton>
      </Stack>
    </Frame>
  </HeroWrapper>
);

export default Hero;
