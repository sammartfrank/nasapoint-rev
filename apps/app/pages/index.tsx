import Head from 'next/head';
import { IndexPage } from '../src/screens/IndexPage';
import { GetServerSideProps, GetStaticProps } from 'next';
import prisma from 'utils/prismaClient';
import moment from 'moment';
import { Apod } from '@prisma/client';

const HomePage = ({ apodSaved }: { apodSaved: string }) => {
  const initialApod = JSON.parse(apodSaved) as Apod;
  return (
    <>
      <Head>
        <title>Nasapoint</title>
      </Head>
      <IndexPage initialApod={initialApod} />
    </>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const date = moment().format('YYYY-MM-DD');

  const [apodSaved, visitCount] = await prisma.$transaction([
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

  console.error('visitCount', visitCount);

  return {
    props: {
      apodSaved: JSON.stringify(apodSaved),
    },
  };
};
