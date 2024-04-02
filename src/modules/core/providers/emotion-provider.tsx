// providers
import { CacheProvider } from '@emotion/react';
// utils
import createEmotionCache from '@modules/core/utils/create-emotion-cache.utils';
// types
import { type FC, type ReactNode } from 'react';
import type { EmotionCache } from '@emotion/cache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface EmotionProviderProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache;
  children: ReactNode;
}

const EmotionProvider: FC<EmotionProviderProps> = ({
  emotionCache = clientSideEmotionCache,
  children,
}) => <CacheProvider value={emotionCache}>{children}</CacheProvider>;

export default EmotionProvider;
