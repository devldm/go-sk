import CompanyUploadForm from "../components/CompanyUploadForm/CompanyUploadForm";
import Layout from "../components/Layout/Layout";

const CompaniesUpload: React.FC = () => {
  return (
    <Layout pageTitle={"Job Upload"}>
      <div className=" flex flex-col items-center justify-center">
        <div className="w-[90%] xl:w-[40%]">
          <h1 className="text-5xl my-6">Upload a company</h1>
          <p className="text-2xl mb-[30px]">
            Thanks for helping us find and list the best companies for english
            speakers!
          </p>
          <CompanyUploadForm />
        </div>
      </div>
    </Layout>
  );
};

export default CompaniesUpload;
