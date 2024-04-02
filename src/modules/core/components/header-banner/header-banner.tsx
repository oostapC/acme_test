// components
import Typography from '@mui/material/Typography';
// types
import type { FC } from 'react';
import type { HeaderBannerBarProps } from './header-banner.interface';
// styles
import { Wrapper, Title, Link, ArrowIcon } from './header-banner.styled';

const HeaderBannerBar: FC<HeaderBannerBarProps> = ({ title }) => {
  return (
    <Wrapper>
      <Title variant='body2' fontWeight={500}>
        {title}
      </Title>
      <Link href='#'>
        <Typography variant='body2'>Read More</Typography>
        <ArrowIcon />
      </Link>
    </Wrapper>
  );
};

export default HeaderBannerBar;
