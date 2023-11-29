import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import JobPreview from "../components/JobPreview/JobPreview";
import Link from "next/link";
import { Job } from "../types";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllJobs = async () => {
    setLoading(true);
    const response = await fetch("/api/allJobs");
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div>
      <Head>
        <title>GO-SK - Jobs</title>
        <meta name="description" content="South Korea Jobs" />
        <link rel="icon" type="image/svg+xml" href="/sk.svg" sizes="any" />
      </Head>
      <NavBar />
      <main>
        {!loading ? (
          <div className="flex flex-col items-center lg:w-[60%] m-auto mt-6 gap-6">
            <div className="flex flex-row justify-between items-center ">
              <h1 className="text-3xl">Jobs</h1>
              <Link href="/jobUpload" className="max-w-max">
                <Button buttonText="Upload" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {jobs && (
                <>
                  {jobs.map((job: Job) => (
                    <Link href={`jobs/${job.job_id}`} key={job.job_id} passHref>
                      <JobPreview jobProps={job} />
                    </Link>
                  ))}
                </>
              )}
              {!loading && jobs.length === 0 && (
                <>
                  <h2 className="text-3xl">
                    No jobs are available right now. We are busy trying to get
                    more roles for you!
                  </h2>
                  <p className="text-2xl">
                    Work for a South Korean company? <br></br>Advertise your
                    roles by submitting below!
                  </p>
                  <Link href="/jobUpload">
                    <Button buttonText="Upload a role" />
                  </Link>
                </>
              )}
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </main>
    </div>
  );
};

export default Jobs;
