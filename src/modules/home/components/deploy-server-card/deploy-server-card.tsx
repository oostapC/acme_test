// components
import Box from '@mui/material/Box';
import Logo from '@modules/core/components/logo';
import Stack from '@mui/material/Stack';
import Button from '@modules/core/components/button';
import TimerIcon from '@modules/core/assets/icons/timer';
import Typography from '@mui/material/Typography';
import SpeedometerIcon from '@modules/core/assets/icons/speedometer';
// types
import type { FC } from 'react';
// styles
import { CardWrapper, ListItem, ArrowIcon } from './deploy-server-card.styled';

const LIST_ITEMS = [
  {
    Icon: SpeedometerIcon,
    title: 'AMD Ryzen Processors',
  },
  {
    Icon: TimerIcon,
    title: '1-10 Gbps Network',
  },
  {
    Icon: SpeedometerIcon,
    title: '24/7 access to control panel',
  },
  {
    Icon: TimerIcon,
    title: 'Windows or Linux',
  },
  {
    Icon: SpeedometerIcon,
    title: '24/7 support',
  },
  {
    Icon: TimerIcon,
    title: 'London & Tokyo  data centers',
  },
  {
    Icon: SpeedometerIcon,
    title: 'Military grade encryption',
  },
  {
    Icon: TimerIcon,
    title: 'Instant activation',
  },
];

const DeployServerCard: FC = () => (
  <CardWrapper>
    <Box ml={1.5}>
      <Logo />
    </Box>
    <Stack rowGap={1.1} mt={4.5} mb={3}>
      {LIST_ITEMS.map(({ title, Icon }) => (
        <ListItem key={title}>
          <Icon />
          <Typography variant='body2'>{title}</Typography>
        </ListItem>
      ))}
    </Stack>
    <Button isDark>
      <Stack
        direction='row'
        justifyContent='space-between'
        width='100%'
        alignItems='center'
      >
        <Typography variant='body2' fontWeight={500}>
          Deploy Server
        </Typography>
        <ArrowIcon />
      </Stack>
    </Button>
  </CardWrapper>
);

export default DeployServerCard;
