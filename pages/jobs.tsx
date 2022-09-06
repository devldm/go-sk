import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Jobs.module.css";
import NavBar from "../components/NavBar/NavBar";
import prisma from "../db";
import JobPreview from "../components/JobPreview/JobPreview";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

export async function getStaticProps() {
  const jobs: Job[] = await prisma.go_sk_jobs.findMany();

  return {
    props: { jobs },
  };
}

type Job = {
  job_id: string;
  job_title: string;
  company_name: string;
  location: string;
  job_description: string;
};

type JobPostings = {
  jobs: Job[];
};

const Jobs: NextPage<JobPostings> = ({
  jobs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GO-SK - Jobs</title>
        <meta name="description" content="South Korea Jobs" />
        <link rel="icon" type="image/svg+xml" href="/sk.svg" sizes="any" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.jobContent}>
          <h1 className={styles.title}>Jobs</h1>
          <div className={styles.jobs}>
            {jobs && (
              <>
                {jobs.map((job: any) => (
                  <Link href={`jobs/${job.job_id}`} key={job.job_id} passHref>
                    <a>
                      <JobPreview jobProps={job} key={job.job_id} />
                    </a>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
