import type { InferGetStaticPropsType, NextPage } from "next";
import prisma from "../../db";
import Layout from "../../components/Layout/Layout";
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
      <div className="flex md:gap-12 justify-center m-auto flex-col p-5 lg:w-[70%] lg:flex-row pt-10">
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
            className="text-xl pt-10 break-all"
            dangerouslySetInnerHTML={{
              __html: job.job_description ?? "no content",
            }}
          />
        </div>

        <div className="md:w-[30em]">
          <JobDetails job={job} />
        </div>
      </div>
    </Layout>
  );
};

export default Job;
