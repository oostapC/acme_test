import { useCallback, type FC } from 'react';
// components
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CheckIcon from '@modules/core/assets/icons/check';
import Typography from '@mui/material/Typography';
import CircleIcon from '@modules/core/assets/icons/circle';
// types
import type { PricingItemProps } from '@modules/home/components/pricing-item/pricing-item.interface';
// styles
import { ItemWrapper, Divider, SecondaryText } from './pricing-item.styled';

const PricingItem: FC<PricingItemProps> = ({
  item,
  isSelected = false,
  onSelect,
}) => {
  const { cpu, ram, storage, amount, id } = item;

  const handleSelect = useCallback(() => onSelect(id), [id, onSelect]);

  return (
    <ItemWrapper onClick={handleSelect} isSelected={isSelected}>
      <Box>
        <Typography variant='h2' component='span' fontWeight={600}>
          {amount}{' '}
        </Typography>
        <Typography variant='h4' component='span'>
          /mo
        </Typography>
      </Box>
      <Stack direction='row' justifyContent='center'>
        <Stack direction='row' columnGap={2} alignItems='center'>
          <Typography variant='body2' fontWeight={500}>
            {cpu}
          </Typography>
          <Divider />
          <Stack direction='row' alignItems='center' gap={1}>
            <Typography variant='body2' component='span' fontWeight={500}>
              {ram}
            </Typography>
            <SecondaryText component='span'> DDR4 RAM</SecondaryText>
          </Stack>
          <Divider />
          <Typography variant='body2' component='span' fontWeight={500}>
            {storage}
          </Typography>
        </Stack>
      </Stack>
      {isSelected ? <CheckIcon /> : <CircleIcon />}
    </ItemWrapper>
  );
};

export default PricingItem;
