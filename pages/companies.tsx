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
    setLoading(false);
  }, []);

  return (
    <div>
      <Head>
        <title>GO-SK - Companies</title>
        <meta name="description" content="South Korea Jobs" />
        <link rel="icon" type="image/svg+xml" href="/sk.svg" sizes="any" />
      </Head>
      <NavBar />
      <main>
        <main>
          <div className="flex flex-row justify-between items-center lg:w-[60%] m-auto">
            <h1 className="text-3xl">Companies</h1>
            <Link href="/companiesUpload" className="max-w-max">
              <Button buttonText="Upload a company" />
            </Link>
          </div>
          {!loading ? (
            <div className="flex flex-col items-center lg:w-[60%] m-auto">
              {/* {!companies && (
              <p className="lg:w-[60%] text-left mt-0 mb-[30px] text-2xl">
                We partner with firms to get the best roles for people looking
                to relocate to Seoul.{" "}
              </p>
            )} */}
              <div className="flex flex-col gap-4 lg:w-[60%] py-4 px-6">
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
      </main>
    </div>
  );
}
