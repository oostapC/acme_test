type MenuItem = {
  id: number;
  title: string;
  href: string;
  isSubMenu?: boolean;
};

export interface NavigationProps {
  activeId?: number;
  menuItems: MenuItem[];
  onClick: (id: number) => void;
}
