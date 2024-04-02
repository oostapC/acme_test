// components
import Typography from '@mui/material/Typography';
// types
import type { FC } from 'react';
// styles
import {
  NewPill,
  ArrowIcon,
  BannerWrapper,
  PromotionButton,
} from './promotion-banner.styled';

const PromotionBanner: FC = () => (
  <BannerWrapper>
    <NewPill>
      <Typography fontWeight={500}>&#x1F389; New</Typography>
    </NewPill>
    <Typography>Get 2 months free with annual plans!</Typography>
    <PromotionButton>
      <Typography fontWeight={500}>Claim Promotion</Typography>
      <ArrowIcon />
    </PromotionButton>
  </BannerWrapper>
);

export default PromotionBanner;
