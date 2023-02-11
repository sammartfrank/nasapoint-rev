import { Apod } from '@prisma/client';
import moment from 'moment';

import { fetchApod } from 'utils/nasaService';
import prisma from 'utils/prismaClient';

const getUniqueApodByDate = async (date: string): Promise<Apod | null> =>
  await prisma.apod.findUnique({
    where: {
      date,
    },
  });

const saveApod = async (apod: Apod) => {
  const date = moment(apod.date).format('YYYY-MM-DD');

  const existingApod = await getUniqueApodByDate(date);
  if (existingApod) return existingApod;

  const payload = {
    ...apod,
    date: moment(apod.date).format('YYYY-MM-DD'),
  };
  return await prisma.apod.create({
    data: payload,
  });
};

export const handleApodByDate = async (date: string): Promise<Apod | null> => {
  const existingApod = await getUniqueApodByDate(date);
  if (existingApod) return existingApod;
  const newApod = await fetchApod().then((apod) => saveApod(apod));
  console.log('🚀 ~ created newApod', newApod);
  return newApod;
};
