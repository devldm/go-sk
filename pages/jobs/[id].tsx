import type { InferGetStaticPropsType, NextPage } from "next";
import styles from "../../styles/JobsPage.module.css";
import prisma from "../../db";
import StickyApply from "../../components/StickyApply/StickyApply";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import { job } from "../../mockData";

export async function getStaticProps({ params }: any) {
  // if (prisma.jobs) {
  //   const job: any = await prisma.jobs.findUnique({
  //     where: {
  //       jobid: params.id,
  //     },
  //   });

  //   return {
  //     props: { job },
  //   };
  // }

  return {
    props:  {job},
  };
}

export async function getStaticPaths() {
  // if (prisma.jobs) {
  //   const jobIdsObject: JobId[] = await prisma.jobs.findMany({
  //     select: {
  //       jobid: true,
  //     },
  //   });

  //   const jobIds = jobIdsObject.map((id) => `/jobs/${id.jobid}`);

  //   return {
  //     paths: jobIds,
  //     fallback: false,
  //   };
  // }

  return {
    paths: [`/jobs/ed6e6a52-7cf2-4d99-8c97-c2cc94cd9942`],
    fallback: false,
  };
}

type JobId = {
  jobid: string;
};

type JobPosting = {
  job: typeof Job;
};

const Job: NextPage<JobPosting> = ({
  job,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout pageTitle={"Job details"}>
      <h1 className={styles.title}>{job.jobtitle}</h1>
      <p className={styles.location}>{job.joblocation}</p>
      <div className={styles.nameAndButton}>
        <p className={styles.companyName}>{job.companyname}</p>
        <StickyApply applyUrl={job.applyurl ?? "no url"} />
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: job.jobdescription ?? "no content" }} />
      <Link href="/jobs">
        <p
          style={{
            color: "hsl(205, 100%, 52%)",
            fontWeight: "bold",
            textAlign: "right",
            fontSize: "20px",
          }}
        >
          Go back to Jobs
        </p>
      </Link>
    </Layout>
  );
};

export default Job;
