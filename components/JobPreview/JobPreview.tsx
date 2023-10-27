import { Job } from "../../types";
import { getTimeSincePosting } from "../../utils/getTimeSincePosting";
import DetailsPill from "../detailsPill/DetailsPill";

interface Props {
  jobProps?: Job;
}

export default function JobPreview({ jobProps }: Props) {
  return (
    <div className="border-4 border-[#30363d67] rounded-xl hover:shadow-[#3758f9] ">
      <div className="p-3 bg-[#30363d67]">
        <div className="">
          <h1 className="text-2xl">{jobProps?.job_title}</h1>
          <p className="italic">{jobProps?.location}</p>
        </div>
        {/* <hr className="py-2" /> */}
        <div className="flex w-full justify-between mt-2">
          <p>{jobProps?.company_name}</p>
          <p className="text-right">
            {getTimeSincePosting(jobProps?.posted_datetime!)}
          </p>
        </div>
      </div>
      <div className="flex gap-2 px-3">
        {jobProps?.remote_level && (
          <DetailsPill jobProps={jobProps?.remote_level} />
        )}
        {jobProps?.experience_level && (
          <DetailsPill jobProps={jobProps?.experience_level} />
        )}
        {jobProps?.role_type && <DetailsPill jobProps={jobProps?.role_type!} />}
      </div>
    </div>
  );
}
