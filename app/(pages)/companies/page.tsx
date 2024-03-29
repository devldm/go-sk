import Link from "next/link";
import Button from "../../components/Button/Button";
import { company } from "../../../types";
import CompanyPreview from "../../components/CompanyPreview";
import { getCompanies } from "../../lib/data";

export default async function Companies() {
  const companies = await getCompanies();

  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center xl:w-[60%] m-auto gap-6 mt-6 p-5">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl">Companies</h1>
          <Link href="/companies-upload" className="max-w-max">
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
          {companies.length === 0 && (
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl">
                No companies have been submitted yet. Come back later
              </h2>
              <Link href="/companies-upload">
                <Button buttonText="Upload a company" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
