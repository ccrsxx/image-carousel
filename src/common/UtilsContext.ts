import { createContext } from 'react';

interface UtilsContextProps {
  handleImageIndexChange: (
    direction?: 'left' | 'right',
    targetIndex?: number
  ) => () => void;
}

export const UtilsContext = createContext({} as UtilsContextProps);
