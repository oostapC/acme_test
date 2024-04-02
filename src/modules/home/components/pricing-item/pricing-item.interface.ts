// types
import type { PricingItem } from '@modules/home/types/pricing.types';

export interface PricingItemProps {
  item: PricingItem;
  isSelected?: boolean;
  onSelect: (id: number) => void;
}
