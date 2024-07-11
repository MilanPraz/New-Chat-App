export const imageUrlConverter = (image: string) => {
  const fullUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${image}`;
  return fullUrl;
};
