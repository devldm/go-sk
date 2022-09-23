import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Jobs.module.css";
import NavBar from "../components/NavBar/NavBar";
import prisma from "../db";
import JobPreview from "../components/JobPreview/JobPreview";
import Link from "next/link";
import { Job, JobPostings } from "../types";
import { jobs } from "../mockData";

export async function getStaticProps() {
  try {
    const jobs: Job[] = await prisma.jobs.findMany();

    return {
      props: { jobs },
    };
  } catch {
    return {
      props: { jobs },
    };
  }
}

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
                  <Link href={`jobs/${job.jobid}`} key={job.jobid} passHref>
                    <a>
                      <JobPreview jobProps={job} key={job.jobid} />
                    </a>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Jobs;
