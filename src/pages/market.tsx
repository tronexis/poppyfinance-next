import type {
  CryptoQueryOptions,
  NextPageWithLayout,
  SettingsQueryOptions,
} from '@/types';
import { QueryClient, dehydrate } from 'react-query';

import { API_ENDPOINTS } from '@/data/utils/endpoints';
import CryptoCurrencyPricingSkeleton from '@/components/ui/skeleton/CryptoCurrencyPricingSkeleton';
import CryptocurrencyPricingRetroTable from '@/components/cryptocurrency-pricing-table/cryptocurrency-pricing-retro-table';
import CryptocurrencyPricingTable from '@/components/cryptocurrency-pricing-table/cryptocurrency-pricing-table';
import { GetStaticProps } from 'next';
import { LAYOUT_OPTIONS } from '@/lib/constants';
import LivePricingSlider from '@/components/ui/live-pricing-slider';
import LivePricingSliderRetro from '@/components/ui/live-pricing-slider-retro';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import client from '@/data/utils';
import { useCoins } from '@/hooks/useCoin';
import { useLayout } from '@/lib/hooks/use-layout';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  try {
    await Promise.all([
      queryClient.prefetchQuery(
        [API_ENDPOINTS.SETTINGS, { language: locale }],
        ({ queryKey }) =>
          client.settings.all(queryKey[1] as SettingsQueryOptions)
      ),
      queryClient.prefetchInfiniteQuery(
        [API_ENDPOINTS.PRICING, { language: locale }],
        ({ queryKey }) => client.coins.all(queryKey[1] as CryptoQueryOptions)
      ),
    ]);
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: 300, // In seconds
    };
  } catch (error) {
    //* if we get here, the product doesn't exist or something else went wrong
    return {
      notFound: true,
    };
  }
};

function CoinPrices() {
  const { layout } = useLayout();
  // const { isLoading, error } = useCoins();

  // if (isLoading) {
  //   return <CryptoCurrencyPricingSkeleton />;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  if (layout === LAYOUT_OPTIONS.RETRO) {
    return (
      <>
        <NextSeo
          title="Live Pricing"
          description="Criptic - React Next Web3 NFT Crypto Dashboard Template"
        />
        <LivePricingSliderRetro limits={3} />
        <CryptocurrencyPricingRetroTable />
      </>
    );
  }

  return (
    <>
      <NextSeo
        title="Market - Poppy Finance"
        description="Poppy Finance - Dashboard"
      />
      <div className="mx-auto max-w-screen-2xl">
        <LivePricingSlider limits={4} />
        <CryptocurrencyPricingTable />
      </div>
    </>
  );
}

const LiveDemo: NextPageWithLayout = () => {
  return <CoinPrices />;
};

LiveDemo.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default LiveDemo;
