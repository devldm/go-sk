import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import HeroNew from "../components/HeroNew";

const Home = () => {
  return (
    <>
      <Head>
        <title>GO-SK</title>
        <meta name="description" content="South Korea Jobs" />
        <link rel="icon" type="image/svg+xml" href="/sk.svg" sizes="any" />
      </Head>
      <main>
        <NavBar />
        <HeroNew />
      </main>
    </>
  );
};

export default Home;
