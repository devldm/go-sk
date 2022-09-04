import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Jobs.module.css'
import NavBar from '../components/NavBar/NavBar'
import prisma from '../db';
import JobPost from '../components/JobPost/JobPost'
import Footer from '../components/Footer/Footer';

export async function getStaticProps() {
  const jobs: Job[] = await prisma.go_sk_jobs.findMany()

  return {
    props: { jobs }
  };
}

type Job = {
  job_id: string,
  job_title: string,
  company_name: string,
  location: string,
  job_description: string,
}

type JobPostings = {
  jobs: Job[];
}


const Jobs: NextPage<JobPostings> = ({ jobs }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
          <h1 className={styles.title}>
            Jobs
          </h1>
          {jobs && <>
            {jobs.map((job: any) => (
              <JobPost jobProps={job} key={job.job_id} />
            ))}
          </>}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Jobs