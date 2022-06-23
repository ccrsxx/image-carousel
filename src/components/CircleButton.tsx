import { useContext } from 'react';
import { UtilsContext } from '../common';

interface CircleButtonProps {
  currentImage: number;
  images: { src: string }[];
}

export function CircleButton({ currentImage, images }: CircleButtonProps) {
  const { handleImage } = useContext(UtilsContext);

  return (
    <ul className='absolute bottom-4 left-[50%] flex -translate-x-[50%] gap-2'>
      {images.map((_, index) => (
        <li key={index}>
          <button
            className={`${
              currentImage === index ? 'opacity-80' : 'opacity-40'
            } h-4 w-4 rounded-full bg-white transition duration-300 focus:outline-none
              focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2`}
            type='button'
            onClick={handleImage(undefined, index)}
          />
        </li>
      ))}
    </ul>
  );
}
