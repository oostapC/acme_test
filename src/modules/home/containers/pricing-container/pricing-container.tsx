import { useState, type FC } from 'react';
// components
import Stack from '@mui/material/Stack';
import Button from '@modules/core/components/button';
import Typography from '@mui/material/Typography';
import PricingItem from '@modules/home/components/pricing-item/pricing-item';
import DeployServerCard from '@modules/home/components/deploy-server-card';
// styles
import {
  Grid,
  ArrowIcon,
  SecondaryText,
  PricingWrapper,
} from './pricing-container.styled';
// mock
import pricingList from '@modules/home/mock/pricing-list.json';

const PricingContainer: FC = () => {
  const [activeId, setActiveId] = useState<number>();

  return (
    <PricingWrapper>
      <Typography variant='h2' component='p' fontWeight={700} mb={1}>
        Our Pricing
      </Typography>
      <Grid>
        <Stack>
          <Stack direction='row' columnGap={1} mb={5.875}>
            <Button isDark>
              <Typography fontWeight={500}>
                Get 2 months free (switch to yearly)
              </Typography>
            </Button>
            <Button>
              <SecondaryText fontWeight={500}>Compare</SecondaryText>
              <ArrowIcon />
            </Button>
          </Stack>
          <Stack rowGap={1}>
            {pricingList.items.map((el, index) => (
              <PricingItem
                key={index}
                item={el}
                isSelected={el.id === activeId}
                onSelect={setActiveId}
              />
            ))}
          </Stack>
        </Stack>
        <DeployServerCard />
      </Grid>
      <SecondaryText variant='body2' textAlign='center' mt={4}>
        *All pricing is in USD and renews automatically unless cancelled.{' '}
      </SecondaryText>
    </PricingWrapper>
  );
};

export default PricingContainer;
