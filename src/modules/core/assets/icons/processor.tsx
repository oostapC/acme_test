import { memo } from 'react';
import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';

function ProcessorIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} width='19' height='20' viewBox='0 0 19 20' fill='none'>
      <svg>
        <g clipPath='url(#clip0_1_289)'>
          <path
            d='M14.2453 3.66602H4.74532C3.87087 3.66602 3.16199 4.3749 3.16199 5.24935V14.7493C3.16199 15.6238 3.87087 16.3327 4.74532 16.3327H14.2453C15.1198 16.3327 15.8287 15.6238 15.8287 14.7493V5.24935C15.8287 4.3749 15.1198 3.66602 14.2453 3.66602Z'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M11.87 7.625H7.12V12.375H11.87V7.625Z'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M11.87 2.08398V3.66732'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M11.87 16.334V17.9173'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M1.578 12.375H3.16134'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M1.578 7.625H3.16134'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.828 12.375H17.4113'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.828 7.625H17.4113'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M7.12 2.08398V3.66732'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M7.12 16.334V17.9173'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_1_289'>
            <rect
              width='19'
              height='19'
              fill='white'
              transform='translate(-0.00500488 0.5)'
            />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
}

export default memo(ProcessorIcon);
