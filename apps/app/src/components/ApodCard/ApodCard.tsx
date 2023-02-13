/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */

import Image from 'next/image';

import { ApodInfo } from 'components/ApodCard/ApodInfo/ApodInfo';
import { useApodByDate } from 'hooks/useApodByDate';
import { IOSCard } from './IOSCard/IOSCard';
import { ImagePlaceholder } from 'components/ImagePlaceholder/Image';
import { Apod, mediaType } from '@prisma/client';
import { InfoSkeleton } from './ApodInfo/InfoSkeleton';

type UiApod = Apod & { itsInitial?: boolean };

export const ApodCard = ({ initialApod, dateSelected }: { initialApod: UiApod; dateSelected: Date }) => {
  const { apodByDate, isLoading } = useApodByDate(dateSelected);

  if (!apodByDate) return <InfoSkeleton />;

  const IS_VIDEO = apodByDate?.media_type === mediaType.video;

  const ImageLoader = () => apodByDate?.hdurl ?? '/';

  const apod: UiApod = apodByDate ? apodByDate : initialApod;
  return (
    <div className="container mx-auto flex flex-row justify-center gap-24">
      <ApodInfo apod={apod} />
      <div>
        <IOSCard className="flex w-full grow shadow-lg shadow-black">
          <ImagePlaceholder className="scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 scrollbar-thumb-rounded-md scrollbar-thumb-w-[3px] mx-auto max-h-[850px] max-w-[850px] overflow-y-auto overscroll-contain">
            {!IS_VIDEO ? (
              <Image
                loading="lazy"
                loader={ImageLoader}
                src={'/'}
                alt="Apod"
                quality={100}
                width={1200}
                height={600}
                className="data-[loading=true]:blur-lg data-[loading=false]:blur-none"
                data-loading={isLoading}
              />
            ) : (
              <div className="h-[850px] w-[850px]">
                <iframe src={apodByDate?.url} className="aspect-video h-full w-full" />
              </div>
            )}
          </ImagePlaceholder>
        </IOSCard>
      </div>
    </div>
  );
};
