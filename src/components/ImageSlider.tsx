import { CircleButton } from './CircleButton';
import { ArrowIcon } from './ArrowIcon';

interface ImageSliderProps {
  currentImage: number;
  images: { src: string }[];
}

export function ImageSlider({ currentImage, images }: ImageSliderProps) {
  return (
    <div className='relative animate-fade-slide-up'>
      <ArrowIcon direction='left' />
      <div
        id='slider'
        className='flex h-[60vh] max-w-4xl snap-x snap-mandatory 
                   overflow-auto scroll-smooth rounded shadow-lg 
                   transition-shadow duration-300 hover:shadow-2xl'
      >
        {images.map(({ src }, index) => (
          <a
            data-index={index}
            className='w-full shrink-0 snap-center'
            href={src}
            tabIndex={-1}
            key={index}
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='h-full w-full object-cover'
              src={src}
              alt='cool images'
            />
          </a>
        ))}
      </div>
      <ArrowIcon direction='right' />
      <CircleButton currentImage={currentImage} images={images} />
    </div>
  );
}
