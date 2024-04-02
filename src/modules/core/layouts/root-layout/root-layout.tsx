import { memo, useState, useEffect, type FC } from 'react';
// types
import type { RootLayoutProps } from './root-layout.interface';
// styles
import { RootLayoutContent } from './root-layout.styled';

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const [, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return <RootLayoutContent>{children}</RootLayoutContent>;
};

export default memo(RootLayout);
