import { Apod } from '@prisma/client';

export const fetchApodByDate = async (date: string): Promise<Apod> => {
  const results = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&date=${date}`);
  const res = await results.json();
  return res;
};

export const fetchApodImage = async (url: string) => {
  const results = await fetch(url);
  const res = await results.blob();
  return res;
};
