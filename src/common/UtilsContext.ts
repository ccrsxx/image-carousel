import { createContext } from 'react';

interface UtilsContextProps {
  handleNextImage: () => void;
  handlePrevImage: () => void;
  changeImageIndex: (targetId: number) => () => void;
}

export const UtilsContext = createContext({} as UtilsContextProps);
