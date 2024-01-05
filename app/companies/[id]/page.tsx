"use client";
import { useCallback, useEffect, useState } from "react";
import { company } from "../../../types";
import Layout from "../../components/Layout/Layout";
import Spinner from "../../components/Spinner/Spinner";
import { usePathname } from "next/navigation";

export default function CompanyPage() {
  const [company, setCompany] = useState({} as company);
  const [currentCompanyId, setCurrentCompanyId] = useState("");
  const [loading, setLoading] = useState(true);

  const path = usePathname();

  const getCompany = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`/api/companies/${currentCompanyId}`);
    const data = await response.json();
    setCompany(data);
    setLoading(false);
  }, [currentCompanyId]);

  useEffect(() => {
    if (path) {
      const getIdFromCompanyPathname = path.slice(10);
      setCurrentCompanyId(getIdFromCompanyPathname);
      if (currentCompanyId) getCompany();
    }
  }, [currentCompanyId, getCompany, path]);

  return (
    <Layout pageTitle={"Job details"}>
      {!loading ? (
        <div className="flex md:gap-12 justify-center m-auto flex-col p-5 lg:w-[60%] lg:flex-row pt-10">
          <div className="mb-6 flex-col flex max-w-max">
            <h1 className="md:mt-4 text-6xl font-bold ">
              {company.company_name}
            </h1>
            <p className="">{company.company_industry}</p>
            <div className="flex items-center justify-between text-lg mt-2 w-full">
              <p className="w-max">{company.company_address}</p>
            </div>
            <p className="max-w-max">
              Korean level required: 🇰🇷 <b>{company?.korean_level_required}</b>
            </p>
            <p className="max-w-max">
              Business language: 💼 <b>{company?.business_language}</b>
            </p>

            <div
              className="text-xl pt-10 break-words"
              dangerouslySetInnerHTML={{
                __html: company.company_description ?? "no content",
              }}
            />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </Layout>
  );
}
