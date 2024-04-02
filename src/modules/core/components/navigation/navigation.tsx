import { useCallback, type FC } from 'react';
// types
import type { NavigationProps } from './navigation.interface';
// components
import ArrowIcon from '@modules/core/assets/icons/arrow';
// styles
import { MenuList, MenuText, MenuListItem } from './navigation.styled';

const Navigation: FC<NavigationProps> = ({ menuItems, activeId, onClick }) => {
  const handleClick = useCallback((id: number) => () => onClick(id), [onClick]);

  return (
    <MenuList>
      {menuItems.map((item) => (
        <MenuListItem
          key={item.title}
          isActive={activeId === item.id}
          onClick={handleClick(item.id)}
        >
          <MenuText>{item.title}</MenuText>
          {item.isSubMenu ? <ArrowIcon /> : null}
        </MenuListItem>
      ))}
    </MenuList>
  );
};

export default Navigation;
