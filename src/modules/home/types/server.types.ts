import type { FC } from 'react';

export interface ServerItem {
  Icon: FC;
  title: string;
}

export type ServerList = ServerItem[];
