import { Apod } from '@prisma/client';

export const fetchApodByDate = async (date: string): Promise<Apod> =>
  await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&date=${date}`).then((res) =>
    res.json()
  );
