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
      </Head>
      <main className={styles.main}>
        <NavBar />
        <HeroHome />
      </main>
    </div>
  );
};

export default Home;
