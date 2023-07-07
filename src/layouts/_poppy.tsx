import { AnimatePresence, motion } from 'framer-motion';

import ActiveLink from '@/components/ui/links/active-link';
import { FlashIcon } from '@/components/icons/flash';
import Hamburger from '@/components/ui/hamburger';
import LanguageButton from '@/components/header/language-button';
import Logo from '@/components/ui/poppy-logo';
import { MenuItems } from '@/layouts/sidebar/_layout-menu-poppy';
import SearchButton from '@/components/search/button';
import WalletConnect from '@/components/nft/wallet-connect';
import cn from 'classnames';
import routes from '@/config/routes';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';
import { useDrawer } from '@/components/drawer-views/context';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
import { useShowInfo } from '@/lib/hooks/use-show-info';
import { useWindowScroll } from '@/lib/hooks/use-window-scroll';

function NotificationButton() {
  return (
    <ActiveLink href={routes.notification}>
      <div className="relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-white text-brand shadow-main transition-all hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none dark:border-gray-700 dark:bg-light-dark dark:text-white sm:h-12 sm:w-12">
        <FlashIcon className="h-auto w-3 sm:w-auto" />
        <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-brand shadow-light dark:bg-white sm:h-3 sm:w-3" />
      </div>
    </ActiveLink>
  );
}

function HeaderRightArea() {
  const isMounted = useIsMounted();
  const breakpoint = useBreakpoint();
  const { openDrawer, isOpen } = useDrawer();
  return (
    <div className="order-last flex shrink-0 items-center">
      <div className="ltr:mr-1 rtl:ml-1 ltr:sm:mr-5 rtl:sm:ml-5 xl:hidden">
        <LanguageButton
          color="white"
          className="shadow-main dark:border dark:border-solid dark:border-gray-700 dark:bg-light-dark dark:text-white"
        />
      </div>

      <div className="hidden gap-6 lg:flex 2xl:gap-8">
        {isMounted && ['xs', 'sm', 'md', 'lg'].indexOf(breakpoint) == -1 && (
          <div>
            <LanguageButton
              variant="transparent"
              className="!dark:text-white !text-black"
            />
          </div>
        )}
        {/* <NotificationButton /> */}
        <WalletConnect btnClassName="!bg-[#6CA369] !text-white rounded-xl capitalize !text-lg" />
      </div>

      <div className="flex items-center lg:hidden">
        {/* <NotificationButton /> */}
        <Hamburger
          isOpen={isOpen}
          onClick={() => openDrawer('DRAWER_MENU')}
          color="white"
          className="shadow-main ltr:ml-1 rtl:mr-1 dark:border dark:border-solid dark:border-gray-700 dark:bg-light-dark dark:text-white ltr:sm:ml-5 rtl:sm:mr-5"
        />
      </div>
    </div>
  );
}

export function Header() {
  const [showInfo] = useShowInfo();
  const isMounted = useIsMounted();
  const breakpoint = useBreakpoint();
  const windowScroll = useWindowScroll();
  const { openDrawer, isOpen } = useDrawer();
  return (
    <nav
      className={cn(
        'sticky top-0 z-30',
        isMounted && windowScroll.y > 10
          ? 'bg-gradient-to-b from-primary to-primary/40 shadow-card backdrop-blur dark:from-dark dark:to-dark/80'
          : 'bg-primary dark:bg-dark'
      )}
    >
      <div
        className={cn(
          'flex h-16 w-full items-center justify-between px-4 transition-all duration-300 ltr:right-0 rtl:left-0 sm:px-6 lg:px-8 3xl:px-10',
          isMounted && windowScroll.y > 10 ? 'sm:h-20' : 'sm:h-24',
          'font-header'
        )}
      >
        <div className="mx-auto flex w-full max-w-[2160px] items-center justify-between">
          <div className="flex items-center">
            <div className="hidden lg:mr-6 lg:block xl:hidden">
              <Hamburger
                isOpen={isOpen}
                onClick={() => openDrawer('DRAWER_MENU')}
                color="white"
                className="shadow-main dark:border dark:border-solid dark:border-gray-700 dark:bg-light-dark dark:text-white"
              />
            </div>
            <Logo />
            {isMounted &&
              ['xs', 'sm', 'md', 'lg'].indexOf(breakpoint) == -1 && (
                <MenuItems />
              )}
          </div>
          <HeaderRightArea />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {showInfo && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className={cn('px-4 py-4 sm:px-8 sm:py-6')}>
              <div className="mx-auto flex flex-col justify-between font-medium md:flex-row md:items-center xl:max-w-screen-md 2xl:max-w-screen-xl 2xl:px-10 2xl:text-lg">
                <div className="">
                  <h4>Portfolio</h4>
                  <div className="flex items-center space-x-4 uppercase">
                    <div className="">
                      <small>Deposited</small>
                      <p>13,634.35 ADA</p>
                    </div>
                    <div className="">
                      <small>Monthly Yield</small>
                      <p>13,634.35 ADA</p>
                    </div>
                    <div className="">
                      <small>Daily Yield</small>
                      <p>13,634.35 ADA</p>
                    </div>
                    <div className="">
                      <small>Avg. APY</small>
                      <p>10.6%</p>
                    </div>
                  </div>
                </div>
                <div className="md:text-right">
                  <h4>Platform</h4>
                  <div className="flex items-center space-x-4 uppercase">
                    <div className="">
                      <small>TVL</small>
                      <p>17,423,243 ADA</p>
                    </div>
                    <div className="">
                      <small>Vaults</small>
                      <p>18</p>
                    </div>
                    <div className="">
                      <small>Daily Buyback</small>
                      <p>3,634.35 ADA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default function MinimalLayout({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <div className="dark:bg-dark-100 mt-8 flex min-h-screen flex-col gap-6 bg-primary-light px-4 sm:px-6 lg:px-8 3xl:px-10">
        <main className="mx-auto mb-12 flex w-full max-w-[2160px] flex-grow flex-col">
          {children}
        </main>
      </div>
    </>
  );
}
