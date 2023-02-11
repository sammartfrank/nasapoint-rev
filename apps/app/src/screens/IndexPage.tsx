import { Apod } from '@prisma/client';
import { useApod } from 'hooks/useApod';
import Image from 'next/image';

export const IndexPage = ({ initialApod }: { initialApod: Apod }) => {
  const { apod } = useApod(initialApod);
  console.log('🚀 ~ apod', apod);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-5 text-white bg-zinc-600">
      <div className="flex flex-col items-center justify-center">
        <h1>APOD</h1>
        {apod ? <Image src={apod.hdurl} width={1200} height={1200} alt="Apod" /> : null}
        <p>
          {apod?.title} - {apod?.copyright}
        </p>
        <p>{apod?.explanation}</p>
      </div>
    </div>
  );
};
