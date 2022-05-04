import { CircleButton } from './CircleButton';
import { ArrowIcon } from './ArrowIcon';

interface ImageSliderProps {
  currentImage: number;
  images: { src: string }[];
}

export function ImageSlider({ currentImage, images }: ImageSliderProps) {
  return (
    <div
      className='relative h-[60vh] w-[80vw] shadow-lg transition-shadow 
                 duration-300 hover:shadow-2xl md:h-[70vh] md:w-[70vw]'
    >
      <ArrowIcon direction='left' />
      {images.map(
        ({ src }, index) =>
          index === currentImage && (
            <a href={src} tabIndex={-1} key={index}>
              <img
                className='h-full w-full animate-fade-in rounded object-cover'
                src={src}
                alt='cool images'
              />
            </a>
          )
      )}
      <ArrowIcon direction='right' />
      <CircleButton currentImage={currentImage} images={images} />
    </div>
  );
}
