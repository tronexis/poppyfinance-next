import { CompassIcon } from '@/components/icons/compass';
import { DiskIcon } from '@/components/icons/disk';
import { ExchangeIcon } from '@/components/icons/exchange';
import { FarmIcon } from '@/components/icons/farm';
import { HomeIcon } from '@/components/icons/home';
import { LivePricing } from '@/components/icons/live-pricing';
import { PlusCircle } from '@/components/icons/plus-circle';
import { PoolIcon } from '@/components/icons/pool';
import { ProfileIcon } from '@/components/icons/profile';
import { VoteIcon } from '@/components/icons/vote-icon';
import routes from '@/config/routes';

export const menuItems = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    href: routes.home,
  },
  {
    name: 'Market',
    icon: <LivePricing />,
    href: routes.market,
  },
  {
    name: 'Farm',
    icon: <FarmIcon />,
    href: routes.farms,
  },
  {
    name: 'Swap',
    icon: <ExchangeIcon />,
    href: routes.swap,
  },
  {
    name: 'Liquidity',
    icon: <PoolIcon />,
    href: routes.liquidity,
  },
  // {
  //   name: 'NFTs',
  //   icon: <CompassIcon />,
  //   href: routes.search,
  //   dropdownItems: [
  //     {
  //       name: 'Explore NFTs',
  //       icon: <CompassIcon />,
  //       href: routes.search,
  //     },
  //     {
  //       name: 'Create NFT',
  //       icon: <PlusCircle />,
  //       href: routes.createNft,
  //     },
  //     {
  //       name: 'NFT Details',
  //       icon: <DiskIcon />,
  //       href: routes.nftDetails,
  //     },
  //   ],
  // },
  {
    name: 'My Info',
    icon: <ProfileIcon />,
    href: routes.profile,
  },
  // {
  //   name: 'Vote',
  //   icon: <VoteIcon />,
  //   href: routes.vote,
  //   dropdownItems: [
  //     {
  //       name: 'Explore',
  //       href: routes.vote,
  //     },
  //     {
  //       name: 'Vote with pools',
  //       href: routes.proposals,
  //     },
  //     {
  //       name: 'Create proposal',
  //       href: routes.createProposal,
  //     },
  //   ],
  // },
];
