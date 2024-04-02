// types
import type { FC } from 'react';
import type { ContentWrapperProps } from './content-wrapper.interface';
// styles
import { Wrapper } from './content-wrapper.styled';

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default ContentWrapper;
