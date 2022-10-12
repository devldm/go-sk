import type { InferGetStaticPropsType, NextPage } from "next";
import styles from "../../styles/JobsPage.module.css";
import prisma from "../../db";
import StickyApply from "../../components/StickyApply/StickyApply";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";

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

  // return {
  //   paths: [`/jobs/ed6e6a52-7cf2-4d99-8c97-c2cc94cd9942`],
  //   fallback: false,
  // };
}

type JobId = {
  job_id: string;
};

type JobPosting = {
  job: typeof Job;
};

const Job: NextPage<JobPosting> = ({
  job,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout pageTitle={"Job details"}>
      <h1 className={styles.title}>{job.job_title}</h1>
      <p className={styles.location}>{job.location}</p>
      <div className={styles.nameAndButton}>
        <p className={styles.companyName}>{job.company_name}</p>
        <StickyApply applyUrl={job.apply_url ?? "no url"} />
      </div>
      <hr />
      <div
        dangerouslySetInnerHTML={{
          __html: job.job_description ?? "no content",
        }}
      />
      <StickyApply />
      <Link href="/jobs">
        <p className={styles.backToJobs}>Go back to Jobs</p>
      </Link>
    </Layout>
  );
};

export default Job;
