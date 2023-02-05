import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar/NavBar";
import HeroHome from "../components/HeroHome/HeroHome";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <NavBar />
        <HeroHome />
      </main>
    </div>
  );
};

export default Home;
