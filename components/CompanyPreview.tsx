import DetailsPill from "./detailsPill/DetailsPill";
import { company } from "../types";

export default function CompanyPreview({
  companyProps,
}: {
  companyProps: company;
}) {
  return (
    <div className="bg-[#30363d67] rounded-xl h-full hover:shadow-[#3758f9] min-w-min p-4 border-2 border-[#3f3e3e] hover:border-[#3758f9] flex-col justify-between flex">
      <h1 className="text-2xl">{companyProps?.company_name}</h1>
      <p className="italic">{companyProps?.company_address}</p>
      <p className="italic">{companyProps?.company_industry}</p>

      <div className="flex w-full justify-between mt-2">
        <p className="max-w-max">🇰🇷 {companyProps?.korean_level_required}</p>
        <p className="max-w-max">💼 {companyProps?.business_language}</p>
      </div>
    </div>
  );
}
