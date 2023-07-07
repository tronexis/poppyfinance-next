import 'overlayscrollbars/overlayscrollbars.css';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/assets/css/scrollbar.css';
import '@/assets/css/globals.css';
import '@/assets/css/range-slider.css';

import { CardanoProvider, UseCardanoOptions } from 'use-cardano';
import { QueryClient, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';
import DrawersContainer from '@/components/drawer-views/container';
import Head from 'next/head';
import ModalsContainer from '@/components/modal-views/container';
import type { NextPageWithLayout } from '@/types';
import SettingsButton from '@/components/settings/settings-button';
import SettingsDrawer from '@/components/settings/settings-drawer';
import { ThemeProvider } from 'next-themes';
import { WalletProvider } from '@/lib/hooks/use-connect';
import { useState } from 'react';

// import { Fira_Code } from 'next/font/google';

// base css file

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const options: UseCardanoOptions = {
  node: {
    provider: 'blockfrost',
    projectId: 'preprodOr3zZOkFc8Sqa5sp3aa9oGTb1wxulzhy',
  },
  testnetNetwork: 'Preprod',
  allowedNetworks: ['Testnet'],
};

// const firaCode = Fira_Code({
//   weight: ['400', '500', '700'],
//   style: ['normal'],
//   subsets: ['latin'],
//   variable: '--font-body',
// });

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  //could remove this if you don't need to page level layout
  const getLayout = Component.getLayout ?? ((page) => page);
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <Head>
        {/* maximum-scale 1 meta tag need to prevent ios input focus auto zooming */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <title>Poppy Finance</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <CardanoProvider options={options}>
            <WalletProvider>
              {/* <div className={`${firaCode.variable} font-body`}> */}
              {getLayout(<Component {...pageProps} />)}
              {/* <SettingsButton /> */}
              <SettingsDrawer />
              <ModalsContainer />
              <DrawersContainer />
              {/* </div> */}
            </WalletProvider>
          </CardanoProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default CustomApp;
