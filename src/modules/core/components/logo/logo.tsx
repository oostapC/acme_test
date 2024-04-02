// components
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// types
import type { FC } from 'react';
// styles
import { LogoWrapper, SecondaryText } from './logo.styled';

const Logo: FC = () => (
  <LogoWrapper href='/'>
    <Image
      alt='Company logo'
      height={34}
      src={'/company_logo.png'}
      width={34}
    />
    <Stack>
      <Typography fontWeight={700}>acme.com</Typography>
      <SecondaryText variant='body2'>By acme.com</SecondaryText>
    </Stack>
  </LogoWrapper>
);

export default Logo;
