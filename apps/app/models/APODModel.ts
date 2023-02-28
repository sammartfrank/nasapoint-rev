import { Apod } from '@prisma/client';
import { parseDate } from 'utils/dateUtils';
import { fetchApodByDate, fetchApodImage } from 'utils/nasaService';

import prisma from 'utils/prismaClient';

import { createSupabaseClient } from 'utils/supabaseClient';

const supabase = createSupabaseClient(true);

export const getUniqueApodByDate = async (date: Date): Promise<Apod | null> => {
  return await prisma.apod.findUnique({
    where: {
      date: parseDate(date),
    },
  });
};

const saveApod = async (apod: Apod) => {
  const apodCreated = await prisma.apod.create({
    data: { ...apod },
  });
  const image = await fetchApodImage(apodCreated.url);
  const { data, error } = await supabase.storage
    .from('apods')
    .upload(`apods/apod/${apodCreated.date}/${apodCreated.date}.jpg`, image);
  if (error) throw error;
  return {
    ...apodCreated,
    image: data.path,
  };
};

export const handleApodByDate = async (date: Date): Promise<Apod | null> => {
  const existingApod = await getUniqueApodByDate(date);
  if (existingApod) return existingApod;
  const newApod = await fetchApodByDate(date);
  const apod = await saveApod(newApod);
  return apod;
};
