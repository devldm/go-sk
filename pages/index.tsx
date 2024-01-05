import Head from "next/head";
import NavBar from "../app/components/NavBar/NavBar";
import Hero from "../app/components/Hero";

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
        <Hero />
      </main>
    </>
  );
};

export default Home;
