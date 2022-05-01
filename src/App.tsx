import { useState, useEffect, useMemo } from 'react';
import { ImageSlider } from './components';
import { UtilsContext, images } from './common';

export function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (key === 'ArrowLeft') handlePrevImage();
      else if (key === 'ArrowRight') handleNextImage();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => handleNextImage(), 3000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevCurrentImage) =>
      prevCurrentImage === 0 ? images.length - 1 : prevCurrentImage - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevCurrentImage) =>
      prevCurrentImage === images.length - 1 ? 0 : prevCurrentImage + 1
    );
  };

  const changeImageIndex = (targetIndex: number) => () => {
    setCurrentImageIndex(targetIndex);
  };

  const utils = useMemo(
    () => ({
      handlePrevImage,
      handleNextImage,
      changeImageIndex
    }),
    []
  );

  return (
    <div
      className='flex min-h-screen items-center justify-center 
                 bg-gradient-to-r from-pink-500 to-yellow-500'
    >
      <UtilsContext.Provider value={utils}>
        <ImageSlider currentImage={currentImageIndex} images={images} />
      </UtilsContext.Provider>
    </div>
  );
}
