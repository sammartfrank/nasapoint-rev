import { Apod } from '@prisma/client';
import { parseDate } from 'utils/dateUtils';
import { fetchApodByDate } from 'utils/nasaService';

import prisma from 'utils/prismaClient';

export const getUniqueApodByDate = async (date: Date): Promise<Apod | null> =>
  await prisma.apod.findUnique({
    where: {
      date: parseDate(date),
    },
  });

const saveApod = async (apod: Apod) =>
  await prisma.apod.create({
    data: { ...apod },
  });

export const handleApodByDate = async (date: Date): Promise<Apod | null> => {
  const existingApod = await getUniqueApodByDate(date);
  console.log('🚀 ~ existingApod', existingApod);
  if (existingApod) return existingApod;
  const newApod = await fetchApodByDate(date);
  const apod = await saveApod(newApod);
  console.log('🚀 ~ apod', apod);
  return apod;
};
