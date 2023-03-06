import { ApodInfo } from 'components/ApodCard/ApodInfo/ApodInfo';

import { Apod } from '@prisma/client';
import { Card } from './Card/Card';
import { InfoSkeleton } from './ApodInfo/InfoSkeleton';
import { useApodByDate } from 'hooks/useApodByDate';

export const ApodCard = ({ apod }: { apod: Apod }) => {
  const { apodByDate } = useApodByDate(apod.date);
  if (!apod) return <InfoSkeleton />;

  return (
    <div className="w-full flex md:flex-row flex-col justify-between scrollbar-hide my-5">
      <Card apod={apod || apodByDate} />;
      <ApodInfo apod={apod} />
    </div>
  );
};
