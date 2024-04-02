import { memo } from 'react';
// types
import { type SvgIconProps } from '@mui/material/SvgIcon';

function ArrowIcon(props: SvgIconProps) {
  return (
    <svg width='9' height='6' viewBox='0 0 9 6' fill='none'>
      <path
        d='M1 1.25L4.25 4.75L7.5 1.25'
        stroke='#09090B'
        strokeOpacity='0.6'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default memo(ArrowIcon);
