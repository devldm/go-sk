import type { InferGetStaticPropsType, NextPage } from "next";
import styles from "../../styles/JobsPage.module.css";
import prisma from "../../db";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import LinkedInIcon from "../../components/SocialIcons/LinkedInIcon";
import Button from "../../components/Button/Button";
import { DateTime } from "luxon";

export async function getStaticProps({ params }: any) {
  const job: any = await prisma.go_sk_jobs.findUnique({
    where: {
      job_id: params.id,
    },
  });

  return {
    props: { job },
    revalidate: 30,
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
    fallback: "blocking",
  };
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
  function getTimeSincePosting(dateTime: string) {
    var end = DateTime.now();
    var start = DateTime.fromISO(dateTime);

    var diffInMonths = end.diff(start, "months").toObject().months;
    var diffInDays = end.diff(start, "days").toObject().days;

    var diffMonths = Math.floor(diffInMonths!);
    var diffDays = Math.ceil(diffInDays!);

    if (diffDays < 2) {
      return <p>Posted today</p>;
    } else if (diffDays >= 2 && diffMonths < 1) {
      return <p>{`Posted ${diffDays} day's ago`}</p>;
    } else if (diffMonths < 2 && diffMonths >= 1) {
      return <p>Posted {diffMonths} month ago</p>;
    } else if (diffMonths > 1 && diffMonths <= 12) {
      return <p>{`Posted ${diffMonths} month's ago`}</p>;
    } else {
      return <p>Posted over a year ago</p>;
    }
  }

  return (
    <Layout pageTitle={"Job details"}>
      <div className={styles.jobsWrapper}>
        <h1 className={styles.title}>{job.job_title}</h1>
        <p className={styles.location}>{job.location}</p>
        <div className={styles.nameAndButton}>
          <p className={styles.companyName}>{job.company_name}</p>
          {job.posted_datetime && (
            <div>{getTimeSincePosting(job.posted_datetime)}</div>
          )}
          <Button applyUrl={job.apply_url ?? "no url"} buttonText={"Apply"} />
        </div>
        <hr />
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: job.job_description ?? "no content",
          }}
        />
        <div className={styles.jobDetailsContainer}>
          <h3>Job Details</h3>
          <hr />
          <div className={styles.jobDetails}>
            {job.role_type && (
              <div className={styles.jobDetailContainer}>
                <p className={styles.detailSectionHeading}>Role type</p>
                <p className={styles.jobDetail}>{job.role_type}</p>
              </div>
            )}
            {job.experience_level && (
              <div className={styles.jobDetailContainer}>
                <p className={styles.detailSectionHeading}>Experience level</p>
                <p className={styles.jobDetail}>{job.experience_level}</p>
              </div>
            )}
            {job.remote_level && (
              <div className={styles.jobDetailContainer}>
                <p className={styles.detailSectionHeading}>Remote level</p>
                <p className={styles.jobDetail}>{job.remote_level}</p>
              </div>
            )}
            {job.salary_min && job.salary_max && (
              <div className={styles.jobDetailContainer}>
                <p className={styles.detailSectionHeading}>Salary range</p>
                <p
                  className={styles.jobDetail}
                >{`${job.salary_min} - ${job.salary_max}`}</p>
              </div>
            )}
          </div>
        </div>
        <Button applyUrl={job.apply_url ?? "No url"} buttonText={"Apply"} />
        <Link href="/jobs">
          <p className={styles.backToJobs}>Go back to Jobs</p>
        </Link>
      </div>
    </Layout>
  );
};

export default Job;
