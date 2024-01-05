"use client";

import Layout from "../../components/Layout/Layout";
import { getTimeSincePosting } from "../../../utils/getTimeSincePosting";
import JobDetails from "../../components/JobDetails/JobDetails";
import { Job } from "../../../types";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";

const JobPage: React.FC = ({}) => {
  const [job, setJob] = useState({} as Job);
  const [currentJobId, setCurrentJobId] = useState("");
  const [loading, setLoading] = useState(true);

  const path = usePathname();

  const getJob = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`/api/jobs/${currentJobId}`);
    const data = await response.json();
    setJob(data);
    setLoading(false);
  }, [currentJobId]);

  useEffect(() => {
    if (path) {
      const getIdFromPathname = path.slice(6);
      setCurrentJobId(getIdFromPathname);
      if (currentJobId) getJob();
    }
  }, [currentJobId, getJob, path]);

  return (
    <Layout pageTitle={"Job details"}>
      {!loading ? (
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
      ) : (
        <Spinner />
      )}
    </Layout>
  );
};
export default JobPage;
