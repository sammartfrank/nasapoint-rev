import Head from 'next/head';
import { GetServerSideProps } from 'next';
import prisma from 'utils/prismaClient';
import { Apod } from '@prisma/client';
import { Home } from 'screens/Home';

const HomePage = ({ apodSaved }: { apodSaved: string }) => {
  const initialApod = JSON.parse(apodSaved) as Apod;
  return (
    <>
      <Head>
        <title>Nasapoint</title>
      </Head>
      <Home initialApod={initialApod} />
    </>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const date = new Date().toISOString().split('T')[0];

  const [apodSaved, _visitCount] = await prisma.$transaction([
    prisma.apod.findUnique({
      where: { date },
    }),
    prisma.visit.upsert({
      where: { date },
      create: { date, count: 1 },
      update: {
        count: {
          increment: 1,
        },
      },
      select: {
        count: true,
        date: true,
      },
    }),
  ]);

  return {
    props: {
      apodSaved: JSON.stringify(apodSaved),
    },
  };
};
