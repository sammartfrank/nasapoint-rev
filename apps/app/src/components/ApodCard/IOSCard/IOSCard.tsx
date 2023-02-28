import { Apod, mediaType } from '@prisma/client';
import { Dots } from 'components/ApodCard/IOSCard/Dots/Dots';
import { ImagePlaceholder } from 'components/ImagePlaceholder/Image';
import Image from 'next/image';

const ControlBar = () => {
  return (
    <div className="h-[20px] w-full rounded-t-lg bg-zinc-500">
      <Dots />
    </div>
  );
};

export const IOSCard = ({ apodByDate, className }: { apodByDate?: Apod; className?: string }) => {
  const IS_VIDEO = apodByDate?.media_type === mediaType.video;

  const ImageLoader = () => `${apodByDate?.url || '/'}`;

  return (
    <div className={`flex flex-col rounded-lg bg-zinc-800 ${className}`}>
      <ControlBar />
      <ImagePlaceholder className="w-[800px] h-[850px] relative flex items-center justify-center scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 scrollbar-thumb-rounded-md scrollbar-thumb-w-[3px] mx-auto ">
        {!IS_VIDEO ? (
          <Image
            loader={ImageLoader}
            src={apodByDate?.url || '/'}
            alt="Apod"
            fill
            // priority
            unoptimized
            /* A way to tell the browser to load the image at different sizes. */
            sizes={'(max-width: 600px) 60vw, (max-width: 1000px) 20vw, 13.3vw'}

          />
        ) : (
          <div className="h-[850px] w-[850px]">
            <iframe src={apodByDate?.url} className="aspect-video h-full w-full" />
          </div>
        )}
      </ImagePlaceholder>
    </div>
  );
};
