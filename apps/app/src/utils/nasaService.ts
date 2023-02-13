import { Apod } from '@prisma/client';
import { parseDate } from './dateUtils';

export const fetchApodByDate = async (date: Date): Promise<Apod> => {
  const results = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&date=${parseDate(date)}`
  );
  const res = await results.json();
  return res;
};
