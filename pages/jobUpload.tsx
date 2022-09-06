import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar/NavBar";
import JobUploadForm from "../components/JobUploadForm/JobUploadForm";
import Footer from "../components/Footer/Footer";


const JobUpload: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GO-SK - Job Upload</title>
        <meta name="description" content="South Korea Jobs" />
        <link rel="icon" type="image/svg+xml" href="/sk.svg" sizes="any" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Job Upload</h1>
        <div className={styles.uploadForm}>
          <JobUploadForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobUpload;
