import Link from "next/link";
import { Job } from "../../types";
import Button from "../Button/Button";

export default function JobDetails({ job }: { job: Job }) {
  const noJobDetails =
    job.role_type ||
    job.experience_level ||
    job.salary_min ||
    job.salary_max ||
    job.remote_level;

  return (
    <div className="lg:fixed min-w-max max-w-[400px] ">
      {noJobDetails && (
        <>
          <div className="bg-[#222] p-4 rounded-xl mb-5 flex flex-col border-[#3f3e3e] border-2">
            <h3 className="my-3 text-2xl font-bold">Job Details</h3>
            <hr className="mb-2" />
            <div className={"flex gap-4 flex-col"}>
              {job.role_type && (
                <div className={""}>
                  <p className=" min-w-max text-lg">Role type</p>
                  <p className="min-w-max text-xl font-semibold">
                    {job.role_type}
                  </p>
                </div>
              )}
              {job.experience_level && (
                <div className={""}>
                  <p className="min-w-max text-lg">Experience level</p>
                  <p className="min-w-max text-xl font-semibold">
                    {job.experience_level}
                  </p>
                </div>
              )}
              {job.remote_level && (
                <div className={""}>
                  <p className=" min-w-max text-lg">Remote level</p>
                  <p className="min-w-max text-xl font-semibold">
                    {job.remote_level}
                  </p>
                </div>
              )}
              {job.salary_min! > 0 && job.salary_max! > 0 && (
                <div className={""}>
                  <p className="min-w-max text-lg">
                    Salary range {job.currency && `(${job.currency})`}
                  </p>
                  <p className="min-w-max text-xl font-semibold">{`${job.salary_min} - ${job.salary_max}`}</p>
                </div>
              )}
            </div>
          </div>
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
        </>
      )}
    </div>
  );
}
