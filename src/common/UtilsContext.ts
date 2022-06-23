import { createContext } from 'react';

interface UtilsContextProps {
  handleImage: (
    direction?: 'left' | 'right',
    targetIndex?: number
  ) => () => void;
}

export const UtilsContext = createContext({} as UtilsContextProps);
