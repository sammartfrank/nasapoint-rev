import Head from "next/head";

import { IndexPage } from "../src/screens/IndexPage";
import { useApod } from "hooks/useApod";

const HomePage = () => {
  const { data } = useApod();
  console.log('🚀 ~ HOMEPAGE data', data);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <IndexPage />
    </>
  );
}


export default HomePage;