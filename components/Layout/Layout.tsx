import styles from "./Layout.module.css";
import Head from "next/head";
import Navbar from "../NavBar/NavBar";

export const siteTitle = "GO-SK";

export default function Layout({ children, pageTitle }: any) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="GO-SK" content="Jobs in south korea" />
          <title>GO-SK - {pageTitle}</title>
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="icon" type="image/svg+xml" href="/sk.svg" sizes="any" />
        </Head>
        <header className={styles.header}></header>
        <main>{children}</main>
      </div>
    </>
  );
}
