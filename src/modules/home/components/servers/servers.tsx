// components
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ServerItem from '@modules/home/components/server-item';
// types
import type { FC } from 'react';
import type { ServersProps } from './servers.interface';
// styles
import { ServersWrapper } from './servers.styled';

const Servers: FC<ServersProps> = ({ list }) => (
  <ServersWrapper>
    <Typography variant='h3' component='p' fontWeight={600}>
      Our Servers:
    </Typography>
    <Stack gap={2} direction='row' ml={3}>
      {list.map(({ title, Icon }, index) => (
        <ServerItem key={index} title={title} Icon={Icon} />
      ))}
    </Stack>
  </ServersWrapper>
);

export default Servers;
