import { Apod } from '@prisma/client';
import { parseDate } from './dateUtils';

export const fetchApodByDate = async (date: Date): Promise<Apod> => {
  const results = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&date=${parseDate(date)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    }
  );
  const res = await results.json();
  return res;
};
