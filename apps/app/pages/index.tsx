import Head from 'next/head';
import { GetServerSideProps } from 'next';
import prisma from 'utils/prismaClient';
import { Apod } from '@prisma/client';
import { Home } from 'screens/Home';
import { TODAY, parseDate } from 'utils/dateUtils';

const HomePage = ({ listOfApods }: { listOfApods?: string }) => {
  const list = JSON.parse(listOfApods ?? '') as Apod[];
  return (
    <>
      <Head>
        <title>Nasapoint</title>
      </Head>
      <Home listOfApods={list} />
    </>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const [listOfApods] = await initialize();
  return {
    props: {
      listOfApods: JSON.stringify(listOfApods),
    },
  };
};

const initialize = async () => {
  const FORMATTED_TODAY = parseDate(TODAY);

  const [_visit, listOfApods] = await prisma.$transaction([
    prisma.visit.upsert({
      where: { date: FORMATTED_TODAY },
      create: { date: FORMATTED_TODAY, count: 1 },
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
    prisma.apod.findMany({
      where: {
        date: {
          lte: FORMATTED_TODAY,
        },
      },
      orderBy: {
        date: 'desc',
      },
      take: 10,
    }),
  ]);
  return [listOfApods];
};
