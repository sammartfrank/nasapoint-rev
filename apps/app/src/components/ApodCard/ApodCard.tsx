import Image from 'next/image';

import { ApodInfo } from 'components/ApodCard/ApodInfo/ApodInfo';
import { useApodByDate } from 'hooks/useApodByDate';
import { IOSCard } from './IOSCard/IOSCard';
import { ImagePlaceholder } from 'components/ImagePlaceholder/Image';
import { Apod, mediaType } from '@prisma/client';
import { InfoSkeleton } from './ApodInfo/InfoSkeleton';
import { useState } from 'react';

type UiApod = Apod & { itsInitial?: boolean };

export const ApodCard = ({ initialApod, dateSelected }: { initialApod: UiApod; dateSelected: Date }) => {
  const { apodByDate, isLoading } = useApodByDate(dateSelected);

  if (!apodByDate && !initialApod) return <InfoSkeleton />;

  const IS_VIDEO = apodByDate?.media_type === mediaType.video || initialApod?.media_type === mediaType.video;

  const imageUrl = apodByDate?.hdurl || initialApod?.hdurl;
  const ImageLoader = () => imageUrl ?? '/';

  const apod: UiApod = apodByDate ? apodByDate : initialApod;
  return (
    <div className={`container flex flex-row justify-center gap-24 mx-auto`}>
      <ApodInfo apod={apod} />
      <div>
        <IOSCard className="flex w-full shadow-lg grow shadow-black">
          <ImagePlaceholder className="max-w-[850px] max-h-[850px] mx-auto overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 scrollbar-thumb-rounded-md scrollbar-thumb-w-[3px]">
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
              <div className="w-[850px] h-[850px]">
                <iframe src={apodByDate?.url} className="w-full h-full aspect-video" />
              </div>
            )}
          </ImagePlaceholder>
        </IOSCard>
      </div>
    </div>
  );
};
