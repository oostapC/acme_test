// providers
import GlobalProvider from '@modules/core/providers/global-provider';
// components
import RootLayout from '@modules/core/layouts/root-layout';
import MainLayout from '@modules/core/layouts/main-layout';
// types
import type { AppProps } from 'next/app';
import type { EmotionCache } from '@emotion/react';
// styles
import './global.css';

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const App = ({ Component, pageProps, emotionCache }: MyAppProps) => (
  <GlobalProvider emotionCache={emotionCache}>
    <RootLayout>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </RootLayout>
  </GlobalProvider>
);

export default App;
