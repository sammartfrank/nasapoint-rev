import Image from 'next/image';

import { ApodInfo } from 'components/ApodCard/ApodInfo/ApodInfo';
import { useApodByDate } from 'hooks/useApodByDate';
import { IOSCard } from './IOSCard/IOSCard';
import { ImagePlaceholder } from 'components/ImagePlaceholder/Image';
import { mediaType } from '@prisma/client';
import { InfoSkeleton } from './ApodInfo/InfoSkeleton';

export const ApodCard = ({ dateSelected }: { dateSelected: string }) => {
  const { apodByDate } = useApodByDate(dateSelected);
  if (!apodByDate) return <InfoSkeleton />;

  const IS_VIDEO = apodByDate?.media_type === mediaType.video;

  const ImageLoader = () => `${apodByDate?.hdurl!}`;

  return (
    <div className={`container flex flex-row justify-center gap-24 mx-auto`}>
      <ApodInfo apod={apodByDate} />
      <div>
        <IOSCard className="flex w-full shadow-lg grow shadow-black ">
          <ImagePlaceholder className="max-w-[850px] max-h-[850px] mx-auto overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 scrollbar-thumb-rounded-md scrollbar-thumb-w-[3px]">
            {!IS_VIDEO ? (
              <Image
                priority
                loader={ImageLoader}
                src={'/'}
                alt="Apod"
                quality={100}
                width={1200}
                height={600}
                onLoad={() => console.log('finished loading')}
              />
            ) : (
              <div className="w-[850px] h-[850px]">
                <iframe src={apodByDate.url} className="w-full h-full aspect-video" />
              </div>
            )}
          </ImagePlaceholder>
        </IOSCard>
      </div>
    </div>
  );
};
