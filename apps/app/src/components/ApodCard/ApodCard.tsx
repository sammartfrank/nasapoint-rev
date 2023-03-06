import { ApodInfo } from 'components/ApodCard/ApodInfo/ApodInfo';

import { Apod } from '@prisma/client';
import { Card } from './Card/Card';
import { InfoSkeleton } from './ApodInfo/InfoSkeleton';
import { useApodByDate } from 'hooks/useApodByDate';

export const ApodCard = ({ apod }: { apod: Apod }) => {
  const { apodByDate } = useApodByDate(apod.date);
  if (!apod) return <InfoSkeleton />;

  return (
    <div className="flex w-full flex-col justify-between md:flex-row">
      <Card apod={apod || apodByDate} />;
      <ApodInfo apod={apod} />
    </div>
  );
};
