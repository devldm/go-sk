import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import prisma from "../db";
import JobPreview from "../components/JobPreview/JobPreview";
import Link from "next/link";
import { Job, JobPostings } from "../types";
import Button from "../components/Button/Button";

export async function getStaticProps() {
  const jobs: JobPostings = await prisma.go_sk_jobs.findMany();

  return {
    props: { jobs },
    revalidate: 30,
  };
}

const Jobs: React.FC<{ jobs: JobPostings }> = ({
  jobs,
}: {
  jobs: JobPostings;
}) => {
  return (
    <div>
      <Head>
        <title>GO-SK - Jobs</title>
        <meta name="description" content="South Korea Jobs" />
        <link rel="icon" type="image/svg+xml" href="/sk.svg" sizes="any" />
      </Head>
      <NavBar />
      <main>
        <div className="flex flex-col items-center lg:w-[60%] m-auto">
          {!jobs && (
            <p className="lg:w-[60%] text-left mt-0 mb-[30px] text-2xl">
              We partner with firms to get the best roles for people looking to
              relocate to Seoul.{" "}
            </p>
          )}
          <div className="flex flex-col gap-4 lg:w-[60%] py-4 px-6">
            {jobs && (
              <>
                {jobs.map((job: Job) => (
                  <Link href={`jobs/${job.job_id}`} key={job.job_id} passHref>
                    <JobPreview jobProps={job} />
                  </Link>
                ))}
              </>
            )}
            {jobs.length === 0 && (
              <>
                <h2 className="text-3xl">
                  No jobs are available right now. We are busy trying to get
                  more roles for you!
                </h2>
                <p className="text-2xl">
                  Work for a South Korean company? <br></br>Advertise your roles
                  by submitting below!
                </p>
                <Link href="/jobUpload">
                  <Button buttonText="Upload a role" />
                </Link>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Jobs;
