import { Apod } from '@prisma/client';
import { TODAY, parseDate } from 'utils/dateUtils';
import { fetchApodByDate, fetchApodImage } from 'utils/nasaService';

import prisma from 'utils/prismaClient';

import { createSupabaseClient } from 'utils/supabaseClient';

const supabase = createSupabaseClient(true);

export const getUniqueApodByDate = async (date: string): Promise<Apod | null> => {
  return await prisma.apod.findUnique({
    where: {
      date,
    },
  });
};

export const getListOfApods = (limit: number) => {
  const FORMATTED_TODAY = parseDate(TODAY);
  return prisma.apod.findMany({
    where: {
      date: {
        lte: FORMATTED_TODAY,
      },
    },
    orderBy: {
      date: 'desc',
    },
    take: limit,
  });
};

export const getSourceApod = async (date: string): Promise<Apod | null> => {
  // handles if Apod already exists in DB
  const existingApod = await getUniqueApodByDate(date);
  if (existingApod) return existingApod;

  // handles if Apod does not exist SERVICE to nasa
  // const newApod = await fetchApodByDate(date);

  const apodCreated = await prisma.apod.create({
    data: { ...(await fetchApodByDate(date)) },
  });

  const Image = await fetchApodImage(apodCreated.url);

  const { data, error } = await supabase.storage
    .from('apods')
    .upload(`apods/apod/${apodCreated.date}/${apodCreated.date}.jpg`, Image);
  if (error) throw error;
  return {
    ...apodCreated,
    image: data.path,
  };
};
