// components
import Typography from '@mui/material/Typography';
// types
import type { FC } from 'react';
import type { ServerItemProps } from './server-item.interface';
// styles
import { ItemWrapper, IconWrapper } from './server-item.styled';

const ServerItem: FC<ServerItemProps> = ({ Icon, title }) => (
  <ItemWrapper>
    <IconWrapper>
      <Icon />
    </IconWrapper>
    <Typography variant='body1' fontWeight={500}>
      {title}
    </Typography>
  </ItemWrapper>
);

export default ServerItem;
