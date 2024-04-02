import { memo } from 'react';
// types
import { type SvgIconProps } from '@mui/material/SvgIcon';

function ArrowCircleIcon(props: SvgIconProps) {
  return (
    <svg width='19' height='18' viewBox='0 0 19 18' fill='none'>
      <mask
        id='mask0_1_322'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='19'
        height='18'
      >
        <g clipPath='url(#clip0_1_322)'>
          <path
            d='M9.49782 15.7476C13.2256 15.7476 16.2476 12.7256 16.2476 8.99783C16.2476 5.27002 13.2256 2.24805 9.49782 2.24805C5.77002 2.24805 2.74805 5.27002 2.74805 8.99783C2.74805 12.7256 5.77002 15.7476 9.49782 15.7476Z'
            stroke='black'
            strokeWidth='1.1'
            strokeLinecap='square'
          />
          <path
            d='M9.54591 11.9961L12.499 8.99608M12.499 8.99608L9.54591 5.99609M12.499 8.99608H5.74902'
            stroke='black'
            strokeWidth='1.1'
            strokeLinecap='square'
          />
        </g>
      </mask>
      <g mask='url(#mask0_1_322)'>
        <rect x='0.5' width='18' height='18' fill='#6B7280' />
      </g>
      <defs>
        <clipPath id='clip0_1_322'>
          <rect
            width='18'
            height='18'
            fill='white'
            transform='translate(0.5)'
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default memo(ArrowCircleIcon);
