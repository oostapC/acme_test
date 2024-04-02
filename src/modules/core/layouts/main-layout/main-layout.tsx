// components
import Header from '@modules/core/components/header';
// types
import type { FC } from 'react';
import type { MainLayoutProps } from './main-layout.interface';
// styles
import { LayoutContent } from './main-layout.styled';

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <>
    <Header />
    <LayoutContent>{children}</LayoutContent>
  </>
);

export default MainLayout;
