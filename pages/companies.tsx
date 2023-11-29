import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../components/Button/Button";
import Spinner from "../components/Spinner/Spinner";
import { company } from "../types";
import CompanyPreview from "../components/CompanyPreview";

export default function Companies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllCompanies = async () => {
    setLoading(true);
    const response = await fetch("/api/allCompanies");
    const data = await response.json();
    setCompanies(data);
    setLoading(false);
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <div>
      <Head>
        <title>GO-SK - Companies</title>
        <meta name="description" content="South Korea Jobs" />
        <link rel="icon" type="image/svg+xml" href="/sk.svg" sizes="any" />
      </Head>
      <NavBar />
      <main className="min-h-screen">
        {!loading ? (
          <div className="flex flex-col items-center lg:w-[60%] m-auto gap-6 mt-6">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-3xl">Companies</h1>
              <Link href="/companiesUpload" className="max-w-max">
                <Button buttonText="Upload" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {companies && (
                <>
                  {companies.map((company: company) => (
                    <Link
                      href={`companies/${company.company_id}`}
                      key={company.company_id}
                      passHref
                    >
                      <CompanyPreview companyProps={company} />
                    </Link>
                  ))}
                </>
              )}
              {!loading && companies.length === 0 && (
                <>
                  <h2 className="text-3xl">
                    No companies have been submitted yet. Come back later
                  </h2>
                  <Link href="/companiesUpload">
                    <Button buttonText="Upload a company" />
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
}
