import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { company } from "../../types";
import Layout from "../../components/Layout/Layout";
import Spinner from "../../components/Spinner/Spinner";

export default function CompanyPage() {
  const [company, setCompany] = useState({} as company);
  const [currentCompanyId, setCurrentCompanyId] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const getCompany = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`/api/companies/${currentCompanyId}`);
    const data = await response.json();
    setCompany(data);
    console.log(data);
    setLoading(false);
  }, [currentCompanyId]);

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (!id) return;
      setCurrentCompanyId(id as string);
      if (currentCompanyId) getCompany();
    }
  }, [router.isReady, currentCompanyId, router.query, getCompany]);

  return (
    <Layout pageTitle={"Job details"}>
      {!loading ? (
        <div className="flex md:gap-12 justify-center m-auto flex-col p-5 lg:w-[70%] lg:flex-row pt-10">
          <div className="mb-6 flex-col flex max-w-max">
            <h1 className="md:mt-4 text-4xl font-bold ">
              {company.company_name}
            </h1>
            <p className="">{company.company_url}</p>
            <div className="flex items-center justify-between text-lg mt-2 w-full">
              <p className="w-max">{company.company_name}</p>
            </div>
            <div
              className="text-xl pt-10 break-all"
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
