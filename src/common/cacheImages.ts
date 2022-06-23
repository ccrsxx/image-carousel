import { images } from './images';

export function cacheImages() {
  const promises = images.map(
    ({ src }) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      })
  );

  return Promise.all(promises);
}
