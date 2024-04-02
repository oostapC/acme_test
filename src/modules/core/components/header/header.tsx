// components
import Logo from '@modules/core/components/logo';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Navigation from '@modules/core/components/navigation';
import LogoWhiteIcon from '@modules/core/assets/icons/logo-white';
import HeaderBannerBar from '@modules/core/components/header-banner';
// types
import { FC, useState } from 'react';
// styles
import {
  AppBar,
  Wrapper,
  LogInButton,
  LogoWrapper,
  StartNowButton,
} from './header.styled';
// mock
import navMenu from '@modules/core/mock/nav-menu.json';

const Header: FC = () => {
  const [activeId, setActiveId] = useState<number>();

  return (
    <AppBar>
      <HeaderBannerBar title={'Restocked Today'} />
      <Wrapper>
        <Stack direction='row' gap={{ xs: 5, lg: 11 }}>
          <Logo />
          <Navigation
            menuItems={navMenu.items}
            activeId={activeId}
            onClick={setActiveId}
          />
        </Stack>
        <Stack direction='row'>
          <LogInButton>
            <Typography variant='body1'>Log in</Typography>
          </LogInButton>
          <StartNowButton>
            <Typography variant='body1'>Start Now</Typography>
            <LogoWrapper>
              <LogoWhiteIcon />
              <Typography variant='body1'>Lorem Ipsum</Typography>
            </LogoWrapper>
          </StartNowButton>
        </Stack>
      </Wrapper>
    </AppBar>
  );
};

export default Header;
