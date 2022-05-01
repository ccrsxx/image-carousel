export async function getAverageRgb(src: string): Promise<Uint8ClampedArray> {
  return new Promise((resolve) => {
    const context = document.createElement('canvas').getContext('2d');
    context!.imageSmoothingEnabled = true;

    const image = new Image();
    image.src = src;
    image.crossOrigin = '';

    image.onload = () => {
      context!.drawImage(image, 0, 0, 1, 1);
      resolve(context!.getImageData(0, 0, 1, 1).data.slice(0, 3));
    };
  });
}
