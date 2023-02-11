import { Apod } from '@prisma/client';

export const fetchApod = async (): Promise<Apod> =>
  await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`).then((res) => res.json());
