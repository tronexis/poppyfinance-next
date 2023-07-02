import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import ClassicScreen from '@/components/screens/classic-screen';
import { LAYOUT_OPTIONS } from '@/lib/constants';
import MinimalScreen from '@/components/screens/minimal-screen';
import ModernScreen from '@/components/screens/modern-screen';
import type { NextPageWithLayout } from '@/types';
import PoppyScreen from '@/components/screens/poppy-screen';
import RetroScreen from '@/components/screens/retro-screen';
import RootLayout from '@/layouts/_root-layout';
import { useLayout } from '@/lib/hooks/use-layout';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const HomePage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  const { layout } = useLayout();

  // render poppy screen/page
  if (layout === LAYOUT_OPTIONS.POPPY) {
    return <PoppyScreen />;
  }

  // render minimal screen/page
  if (layout === LAYOUT_OPTIONS.MINIMAL) {
    return <MinimalScreen />;
  }

  // render classic screen/page
  if (layout === LAYOUT_OPTIONS.CLASSIC) {
    return <ClassicScreen />;
  }

  // render retro screen/page
  if (layout === LAYOUT_OPTIONS.RETRO) {
    return <RetroScreen />;
  }

  // render default screen/page which is modern
  return <ModernScreen />;
};

HomePage.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};

export default HomePage;
