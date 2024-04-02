import { memo } from 'react';
import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';

function CircleIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} width='18' height='18' viewBox='0 0 18 18' fill='none'>
      <path
        d='M9 0.890625C13.5488 0.890625 17.2344 4.57617 17.2344 9.125C17.2344 13.6738 13.5488 17.3594 9 17.3594C4.45117 17.3594 0.765625 13.6738 0.765625 9.125C0.765625 4.57617 4.45117 0.890625 9 0.890625ZM9 15.7656C12.6523 15.7656 15.6406 12.8105 15.6406 9.125C15.6406 5.47266 12.6523 2.48438 9 2.48438C5.31445 2.48438 2.35938 5.47266 2.35938 9.125C2.35938 12.8105 5.31445 15.7656 9 15.7656Z'
        fill='#374151'
      />
    </SvgIcon>
  );
}

export default memo(CircleIcon);
