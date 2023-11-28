import DetailsPill from "./detailsPill/DetailsPill";
import { company } from "../types";

export default function CompanyPreview({
  companyProps,
}: {
  companyProps: company;
}) {
  return (
    <div className="border-4 border-[#30363d67] rounded-xl hover:shadow-[#3758f9] ">
      <div className="p-3 bg-[#30363d67]">
        <div className="">
          <h1 className="text-2xl">{companyProps?.company_name}</h1>
          <p className="italic">{companyProps?.company_industry}</p>
        </div>
        <div className="flex w-full justify-between mt-2">
          <p>{companyProps?.company_url}</p>
        </div>
      </div>
      <div className="flex gap-2 px-3">
        {companyProps?.korean_level_required && (
          <DetailsPill detail={companyProps.korean_level_required} />
        )}
        {companyProps?.business_language && (
          <DetailsPill detail={companyProps?.business_language} />
        )}
        {companyProps?.company_industry && (
          <DetailsPill detail={companyProps?.company_industry} />
        )}
      </div>
    </div>
  );
}
