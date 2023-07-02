import AnchorLink from '@/components/ui/links/anchor-link';
import Image from '@/components/ui/image';
import { LAYOUT_OPTIONS } from '@/lib/constants';
import darkLogo from '@/assets/images/poppyfinance-logo.png';
import lightLogo from '@/assets/images/poppyfinance-logo.png';
import routes from '@/config/routes';
import { useIsDarkMode } from '@/lib/hooks/use-is-dark-mode';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
import { useRouter } from 'next/router';

export default function Logo() {
  const router = useRouter();
  const {
    query: { layout },
  } = router;
  const isMounted = useIsMounted();
  const { isDarkMode } = useIsDarkMode();
  return (
    <AnchorLink
      href={{
        pathname: routes.home,
        ...(layout !== LAYOUT_OPTIONS.MODERN &&
          layout !== undefined && {
            query: {
              layout,
            },
          }),
      }}
      className="flex w-28 outline-none sm:w-64 4xl:w-72"
    >
      <span className="relative flex overflow-hidden">
        {isMounted && isDarkMode && (
          <Image src={darkLogo} alt="Criptic" height={50} priority />
        )}
        {isMounted && !isDarkMode && (
          <Image src={lightLogo} alt="Criptic" height={50} priority />
        )}
      </span>
    </AnchorLink>
  );
}
