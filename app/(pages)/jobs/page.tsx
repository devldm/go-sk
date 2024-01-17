import JobPreview from "../../components/JobPreview/JobPreview";
import Link from "next/link";
import { Job } from "../../../types";
import Button from "../../components/Button/Button";
import { getJobs } from "../../lib/data";

const Jobs: React.FC = async () => {
  const jobs = await getJobs();

  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center xl:w-[60%] m-auto mt-6 gap-6 p-5">
        <div className="flex flex-row justify-between items-center ">
          <h1 className="text-3xl">Jobs</h1>
          <Link href="/job-upload" className="max-w-max">
            <Button buttonText="Upload" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {jobs && (
            <>
              {jobs.map((job: Job) => (
                <Link href={`jobs/${job.job_id}`} key={job.job_id}>
                  <JobPreview jobProps={job} />
                </Link>
              ))}
            </>
          )}
          {jobs.length === 0 && (
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl">
                No jobs are available right now. We are busy trying to get more
                roles for you!
              </h2>
              <p className="text-2xl">
                Work for a South Korean company? <br></br>Advertise your roles
                by submitting below!
              </p>
              <Link href="/job-upload">
                <Button buttonText="Upload a role" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Jobs;
