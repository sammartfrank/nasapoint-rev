import { Apod, mediaType } from '@prisma/client';
import { ImagePlaceholder } from 'components/ImagePlaceholder/Image';
import Image from 'next/image';

export const Card = ({ apod }: { apod?: Apod }) => {
  const IS_VIDEO = apod?.media_type === mediaType.video;

  const ImageLoader = () => `${apod?.url || '/'}`;

  return (
    <ImagePlaceholder>
      {!IS_VIDEO ? (
        <Image
          loader={ImageLoader}
          src={apod?.url || '/'}
          alt="Apod"
          style={{
            objectFit: 'contain',
          }}
          width={1024}
          height={805}
        />
      ) : (
        <div className="h-[850px] w-[850px]">
          <iframe src={apod?.url} className="aspect-video h-full w-full" />
        </div>
      )}
    </ImagePlaceholder>
  );
};
