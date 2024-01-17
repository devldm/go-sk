import CompanyUploadForm from "../../components/CompanyUploadForm/CompanyUploadForm";

const CompaniesUpload: React.FC = () => {
  return (
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
  );
};

export default CompaniesUpload;
