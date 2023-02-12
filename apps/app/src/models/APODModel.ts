import { Apod } from '@prisma/client';

import { fetchApodByDate } from 'utils/nasaService';
import prisma from 'utils/prismaClient';

export const getUniqueApodByDate = async (date: string): Promise<Apod | null> =>
  await prisma.apod.findUnique({
    where: {
      date,
    },
  });

const saveApod = async (apod: Apod) =>
  await prisma.apod.create({
    data: { ...apod },
  });

export const handleApodByDate = async (date: string): Promise<Apod | null> => {
  const existingApod = await getUniqueApodByDate(date);
  if (existingApod) return existingApod;
  const newApod = await fetchApodByDate(date).then((apod) => saveApod(apod));
  return newApod;
};
