import { parseDate } from 'utils/dateUtils';
import { Apod } from '@prisma/client';
import { httpGet } from './../utils/apiClient';

import { useQuery } from '@tanstack/react-query';

const fetchApodByDate = async (date: Date): Promise<Apod> => httpGet(`/apod?date=${parseDate(date)}`);

export const useApodByDate = (date: Date) => {
  const { data, isLoading, isError } = useQuery<Promise<Apod>, [string, Date], Apod, readonly [string, Date]>(
    ['apod_by_date', date],
    () => fetchApodByDate(date)
  );

  return { apodByDate: data, isLoading, isError };
};
