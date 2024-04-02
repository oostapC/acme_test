// providers
import ThemeProvider from '@modules/core/providers/theme-provider';
import EmotionProvider from '@modules/core/providers/emotion-provider';
// types
import type { EmotionCache } from '@emotion/cache';
import type { ReactNode, FC } from 'react';

interface GlobalProviderProps {
  emotionCache?: EmotionCache;
  children: ReactNode;
}

const GlobalProvider: FC<GlobalProviderProps> = ({
  emotionCache,
  children,
}) => (
  <EmotionProvider emotionCache={emotionCache}>
    <ThemeProvider>{children}</ThemeProvider>
  </EmotionProvider>
);

export default GlobalProvider;
