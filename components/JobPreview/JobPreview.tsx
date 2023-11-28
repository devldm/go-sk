import { Job } from "../../types";
import { getTimeSincePosting } from "../../utils/getTimeSincePosting";
import DetailsPill from "../detailsPill/DetailsPill";

export default function JobPreview({ jobProps }: { jobProps: Job }) {
  return (
    <div className="border-4 border-[#30363d67] rounded-xl hover:shadow-[#3758f9] ">
      <div className="p-3 bg-[#30363d67]">
        <div className="">
          <h1 className="text-2xl">{jobProps?.job_title}</h1>
          <p className="italic">{jobProps?.location}</p>
        </div>
        <div className="flex w-full justify-between mt-2">
          <p>{jobProps?.company_name}</p>
          <p className="text-right">
            {getTimeSincePosting(jobProps?.posted_datetime!)}
          </p>
        </div>
      </div>
      <div className="flex gap-2 px-3">
        {jobProps?.remote_level && (
          <DetailsPill detail={jobProps?.remote_level} />
        )}
        {jobProps?.experience_level && (
          <DetailsPill detail={jobProps?.experience_level} />
        )}
        {jobProps?.role_type && <DetailsPill detail={jobProps?.role_type!} />}
      </div>
    </div>
  );
}
