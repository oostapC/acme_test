// components
import Hero from '@modules/home/components/hero';
import Servers from '@modules/home/components/servers';
import ContactUs from '@modules/home/components/contact-us';
import ContentWrapper from '@modules/core/components/content-wrapper';
import PromotionBanner from '@modules/home/components/promotion-banner';
import PricingContainer from '@modules/home/containers/pricing-container';
// constants
import { SERVERS_LIST } from '@modules/home/constants/servers-list.constants';
// types
import { FC } from 'react';
// styles

const HomeContainer: FC = () => (
  <ContentWrapper>
    <PromotionBanner />
    <Hero />
    <Servers list={SERVERS_LIST} />
    <PricingContainer />
    <ContactUs />
  </ContentWrapper>
);

export default HomeContainer;
