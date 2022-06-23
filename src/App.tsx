import { useState, useEffect, useMemo } from 'react';
import { ImageSlider, Loading } from './components';
import { UtilsContext, cacheImages, sleep, images } from './common';

export function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const randomizeGradient = () => {
      const ogColors = ['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'];

      const shuffledColors = ogColors
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      shuffledColors.forEach((color, index) =>
        document.documentElement.style.setProperty(`--color-${index}`, color)
      );
    };
    const loadImages = async () => {
      setIsLoading(true);

      await cacheImages();
      await sleep(1000);

      setIsLoading(false);
    };
    randomizeGradient();
    loadImages();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              (entry.target as HTMLAnchorElement).dataset.index!,
              10
            );
            if (index !== currentImageIndex) setCurrentImageIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    const dots = document.querySelectorAll('#slider > a');
    dots.forEach((dot) => observer.observe(dot));

    const intervalId = setInterval(() => handleImage('right')(), 3000);

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, [currentImageIndex]);

  const handleImage =
    (direction?: 'left' | 'right', targetIndex?: number) => () =>
      setCurrentImageIndex((prevCurrentImageIndex) => {
        let nextIndex =
          targetIndex ??
          prevCurrentImageIndex + (direction === 'left' ? -1 : 1);

        if (nextIndex < 0) nextIndex = images.length - 1;
        else if (nextIndex === images.length) nextIndex = 0;

        const selector = `#slider > a:nth-child(${nextIndex + 1})`;
        const dot = document.querySelector(selector);

        dot!.scrollIntoView({
          behavior: 'smooth',
          inline: 'start'
        });

        return nextIndex;
      });

  const utils = useMemo(
    () => ({
      handleImage
    }),
    []
  );

  return (
    <div className='mx-6 flex min-h-screen items-center justify-center'>
      <UtilsContext.Provider value={utils}>
        {!isLoading ? (
          <ImageSlider currentImage={currentImageIndex} images={images} />
        ) : (
          <Loading />
        )}
      </UtilsContext.Provider>
    </div>
  );
}
