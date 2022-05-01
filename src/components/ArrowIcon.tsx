import { useContext } from 'react';
import { UtilsContext, IoIosArrowBack } from '../common';

interface ArrowIconProps {
  direction: 'left' | 'right';
}

export function ArrowIcon({ direction }: ArrowIconProps) {
  const { handlePrevImage, handleNextImage } = useContext(UtilsContext);

  const { arrowStyle, arrowDirection, arrowFunc } =
    direction === 'left'
      ? {
          arrowStyle: 'left-4',
          arrowDirection: '-translate-x-[2px]',
          arrowFunc: handlePrevImage
        }
      : {
          arrowStyle: 'right-4',
          arrowDirection: 'rotate-180 translate-x-[2px]',
          arrowFunc: handleNextImage
        };

  return (
    <button
      className={`${arrowStyle} white absolute top-[50%] z-10 select-none rounded-full p-1
                    text-4xl transition duration-300 hover:bg-gray-ish 
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400`}
      type='button'
      onClick={arrowFunc}
    >
      <IoIosArrowBack className={arrowDirection} color='white' />
    </button>
  );
}
