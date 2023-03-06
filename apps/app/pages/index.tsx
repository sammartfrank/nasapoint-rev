import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Apod } from '@prisma/client';
import { Home } from 'screens/Home';
import { getListOfApods } from '../models/APODModel';

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
  const listOfApods = await getListOfApods(10);
  return {
    props: {
      listOfApods: JSON.stringify(listOfApods),
    },
  };
};
