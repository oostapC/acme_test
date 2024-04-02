import { memo } from 'react';
import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';

function ArrowFilledIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} fill='none' viewBox='0 0 10 10'>
      <g opacity='.6'>
        <path
          d='m7.25 5-3.5-2.25v4.5L7.25 5Z'
          fill='#fff'
          stroke='#fff'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </SvgIcon>
  );
}

export default memo(ArrowFilledIcon);
