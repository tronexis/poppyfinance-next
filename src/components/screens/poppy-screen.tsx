import { useEffect, useState } from 'react';

import AuthorImage from '@/assets/images/author.jpg';
import Avatar from '@/components/ui/avatar';
import ComparisonChart from '@/components/ui/chats/comparison-chart';
import LiquidityChart from '../ui/chats/liquidity-chart';
import { NextSeo } from 'next-seo';
import OverviewChart from '@/components/ui/chats/overview-chart';
import PriceFeedSlider from '@/components/ui/live-price-feed';
import TopCurrencyTable from '../top-currency/currency-table';
import TopPools from '@/components/ui/top-pools';
import TransactCoin from '@/components/ui/transact-coin';
import TransactionTable from '@/components/transaction/transaction-table';
import VolumeChart from '../ui/chats/volume-chart';
import WalletCard from '@/components/ui/wallet-card';
import { priceFeedData } from '@/data/static/price-feed';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';

//images

const topPoolsLimit = (breakpoint: string) => {
  switch (breakpoint) {
    case 'md':
      return 15;
    case '2xl':
      return 15;
    default:
      return 15;
  }
};

export default function PoppyScreen() {
  const [limit, setLimit] = useState(15);
  const breakpoint = useBreakpoint();
  useEffect(() => {
    setLimit(topPoolsLimit(breakpoint));
  }, [breakpoint]);
  return (
    <>
      <NextSeo title="Poppy Finance" description="Poppy Finance - Dashboard" />
      <div className="">
        <div className="mt-6 grid gap-6 sm:my-10 md:grid-cols-2">
          <LiquidityChart
            title="Total value locked"
            colors={['#FFD17C', '#FFF3C8']}
          />
          <VolumeChart colors={['#FFD17C', '#FFF3C8']} />
        </div>
        <div className="mt-6 sm:my-10">
          <TopCurrencyTable colors={['#FFD17C', '#FFF3C8']} />
        </div>
        <div className="mt-6 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-12">
          <div className="md:col-span-2 lg:col-span-full xl:col-start-1 xl:col-end-9 xl:row-start-2 xl:row-end-3 2xl:col-start-1 2xl:col-end-10 2xl:row-start-2 2xl:row-end-3 3xl:col-span-9 3xl:row-start-2 3xl:row-end-3">
            <TransactionTable />
          </div>

          <div className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 lg:col-span-6 lg:row-start-2 lg:row-end-3 xl:col-start-9 xl:col-end-13 xl:row-start-2 xl:row-end-3 2xl:col-start-10 2xl:col-end-13 2xl:row-start-2 2xl:row-end-3 3xl:col-span-3 3xl:row-start-2 3xl:row-end-3">
            <TopPools limit={limit} />
          </div>
        </div>
      </div>
    </>
  );
}
