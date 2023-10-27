import type { InferGetStaticPropsType, NextPage } from "next";
import prisma from "../../db";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import Button from "../../components/Button/Button";
import { getTimeSincePosting } from "../../utils/getTimeSincePosting";
import JobDetails from "../../components/JobDetails/JobDetails";

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
  return (
    <Layout pageTitle={"Job details"}>
      <div className="flex gap-4 justify-center m-auto flex-col p-5 lg:w-[80%] lg:flex-row pt-10">
        <div className="mb-6 flex-col flex max-w-max">
          <h1 className="md:mt-4 text-4xl font-bold ">{job.job_title}</h1>
          <p className="">{job.location}</p>
          <div className="flex items-center justify-between text-lg mt-2 w-full">
            <p className="w-max">{job.company_name}</p>
            {job.posted_datetime && (
              <p className="w-max">
                {getTimeSincePosting(job.posted_datetime)}
              </p>
            )}
          </div>
          <div
            className="text-xl pt-10"
            dangerouslySetInnerHTML={{
              __html: job.job_description ?? "no content",
            }}
          />
        </div>

        <div className="md:w-[25em]">
          <JobDetails job={job} />
          <Button
            applyUrl={job.apply_url ?? "No url"}
            buttonText={"Apply"}
            customClassName="w-[100%] min-w-full"
          />
          <Link href="/jobs">
            <p className="text-[#3758f9] font-bold text-right text-xl cursor-pointer mt-3 mb-5 block">
              Go back to Jobs
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Job;
