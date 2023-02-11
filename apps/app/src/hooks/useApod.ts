import { Apod } from '@prisma/client';
import { httpGet } from './../utils/apiClient';

import { useQuery } from '@tanstack/react-query';

const fetchApod = async (): Promise<Apod> => httpGet('/apod');

export const useApod = (initialApod: any) => {
  const { data, isLoading, isError } = useQuery<Promise<Apod>, string[], Apod, readonly string[]>(['apod'], fetchApod, {
    initialData: initialApod,
    enabled: !initialApod,
  });

  return { apod: data, isLoading, isError };
};
