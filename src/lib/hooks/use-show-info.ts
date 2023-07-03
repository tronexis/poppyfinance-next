import { atom, useAtom } from 'jotai';

const showInfoAtom = atom(false);

export const useShowInfo = () => useAtom(showInfoAtom);
