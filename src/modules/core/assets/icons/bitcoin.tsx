import { memo } from 'react';
import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';

function BitcoinIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} width='11' height='14' viewBox='0 0 11 14' fill='none'>
      <svg>
        <path
          d='M5.32951 11.7258C8.81734 12.3045 9.67868 7.70915 6.19084 7.12981M5.32951 11.7258L1.14539 11.0311M5.32951 11.7258L5.08443 13.0391M3.40072 6.66715L6.19155 7.12981C9.67939 7.70915 10.5407 3.11315 7.05218 2.53448L2.86664 1.83981M7.05147 2.53448L7.29797 1.22115M2.29289 12.5758L4.50714 0.757812'
          stroke='black'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </SvgIcon>
  );
}

export default memo(BitcoinIcon);
