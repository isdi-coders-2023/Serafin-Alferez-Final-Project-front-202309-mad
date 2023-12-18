export const makeImageURL = (publicID: string, height: number) => {
  height = 400;
  const urlBase = 'http://res.cloudinary.com/drv1kbmgi/image/upload';
  const url = `${urlBase}/c_fill,h_${height}/v1701283748/${publicID}`;
  return url;
};
