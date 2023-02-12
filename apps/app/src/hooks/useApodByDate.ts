import { Apod } from '@prisma/client';
import { httpGet } from './../utils/apiClient';

import { useQuery } from '@tanstack/react-query';
import moment from 'moment';

const fetchApodByDate = async (date: string): Promise<Apod> => httpGet(`/apod?date=${date}`);

export const useApodByDate = (date: string) => {
  const { data, isLoading, isError } = useQuery<Promise<Apod>, string[], Apod, readonly string[]>(
    ['apod_by_date', date],
    () => fetchApodByDate(date),
    {
      enabled: moment(date).isBefore(moment()),
      onError(error) {
        console.log('🚀 ~ file: useApodByDate.ts ~ line 27 ~ onError ~ error', error);
      },
    }
  );

  return { apodByDate: data, isLoading, isError };
};
