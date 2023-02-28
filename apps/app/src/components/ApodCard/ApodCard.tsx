import { ApodInfo } from 'components/ApodCard/ApodInfo/ApodInfo';
import { useApodByDate } from 'hooks/useApodByDate';
import { IOSCard } from './IOSCard/IOSCard';
import { Apod } from '@prisma/client';
import { InfoSkeleton } from './ApodInfo/InfoSkeleton';

export const ApodCard = ({ initialApod, dateSelected }: { initialApod?: Apod; dateSelected: Date }) => {
  const { apodByDate, isLoading } = useApodByDate(dateSelected);

  if (!apodByDate) return <InfoSkeleton />;

  const apod = apodByDate ? apodByDate : initialApod;

  return (
    <div className="relative -z-[1]  flex h-full min-h-screen w-full lg:flex-row flex-col items-center ">
      <div className="md:flex-row flex-col container mx-auto flex  justify-center gap-24 my-24">
        <ApodInfo apod={apod} />
        <IOSCard apodByDate={apodByDate} className="flex shadow-lg" />
      </div>
    </div>
  );
};
