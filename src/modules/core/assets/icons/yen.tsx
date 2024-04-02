import { memo } from 'react';
import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';

function YenIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} width='17' height='18' viewBox='0 0 17 18' fill='none'>
      <path
        d='M8.49499 7.22917V15.375M8.49499 7.22917L4.245 2.625M8.49499 7.22917L12.745 2.625'
        stroke='black'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.245 11.125H12.745'
        stroke='black'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.245 8.29102H12.745'
        stroke='black'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  );
}

export default memo(YenIcon);
