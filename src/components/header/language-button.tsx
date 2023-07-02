import Button from '@/components/ui/button';
import { LanguageIcon } from '../icons/language';
import { useModal } from '@/components/modal-views/context';

export default function LanguageButton({ ...props }) {
  const { openModal } = useModal();
  return (
    <Button
      shape="circle"
      aria-label="Search"
      onClick={() => openModal('SEARCH_VIEW')}
      {...props}
    >
      <LanguageIcon className="h-auto w-3.5 sm:w-auto" />
    </Button>
  );
}
