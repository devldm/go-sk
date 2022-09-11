import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/JobsPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import prisma from "../../db";
import Footer from "../../components/Footer/Footer";
import StickyApply from "../../components/StickyApply/StickyApply";

export async function getStaticProps({ params }: any) {
  const job: any = await prisma.go_sk_jobs.findUnique({
    where: {
      job_id: params.id,
    },
  });

  return {
    props: { job },
  };
}

export async function getStaticPaths() {
  const jobIdsObject: JobId[] = await prisma.go_sk_jobs.findMany({
    select: {
      job_id: true,
    },
  });

  const jobIds = jobIdsObject.map((id) => `/jobs/${id.job_id}`);

  return {
    paths: jobIds,
    fallback: false,
  };
}

type Job = {
  job_id: string;
  job_title: string;
  company_name: string;
  location: string;
  job_description: string;
};

type JobId = {
  job_id: string;
};

type JobPosting = {
  job: Job;
};

const Job: NextPage<JobPosting> = ({
  job,
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
          <h1 className={styles.title}>{job.job_title}</h1>
          <p className={styles.location}>{job.location}</p>
          <div className={styles.nameAndButton}>
          <p className={styles.companyName}>{job.company_name}</p> 
          <StickyApply /> 
          </div>
          <hr />
         <div dangerouslySetInnerHTML={{ __html: job.job_description }} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Job;
