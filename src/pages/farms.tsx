import Farms from '@/components/farms/farms';
import { LAYOUT_OPTIONS } from '@/lib/constants';
import LivePricingSlider from '@/components/ui/live-pricing-slider';
import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import { useLayout } from '@/lib/hooks/use-layout';

const FarmsPage: NextPageWithLayout = () => {
  const { layout } = useLayout();
  return (
    <>
      <NextSeo
        title="Farm - Poppy Finance"
        description="Poppy Finance - Crypto Dashboard"
      />
      <div className="mx-auto max-w-screen-2xl">
        {layout === LAYOUT_OPTIONS.POPPY && <LivePricingSlider limits={4} />}
        <Farms />
      </div>
    </>
  );
};

FarmsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default FarmsPage;
