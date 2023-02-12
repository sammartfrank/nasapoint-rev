import moment from 'moment';
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
  ctx.res.setHeader('Cache-Control', 'public, Cache-Control: max-age=3600, stale-while-revalidate=59');

  const date = moment().format('YYYY-MM-DD');

  const [apodSaved, _visitCount] = await prisma.$transaction([
    // Get Unique Apod By Date
    prisma.apod.findUnique({
      where: { date },
    }),
    // Upsert Visit counter by Date
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
