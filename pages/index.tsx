import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import HeroHome from "../components/HeroHome/HeroHome";

const Home = () => {
  return (
    <>
      <Head>
        <title>GO-SK</title>
        <meta name="description" content="South Korea Jobs" />
        <link rel="icon" type="image/svg+xml" href="/sk.svg" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>
      <main>
        <NavBar />
        <HeroHome />
      </main>
    </>
  );
};

export default Home;
