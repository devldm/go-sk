import JobUploadForm from "../../components/JobUploadForm/JobUploadForm";
import Layout from "../../components/Layout/Layout";

const JobUpload: React.FC = () => {
  return (
    <Layout pageTitle={"Job Upload"}>
      <div className=" flex flex-col items-center justify-center">
        <div className="w-[90%] xl:w-[40%]">
          <h1 className="text-5xl my-6">Upload your role</h1>
          <p className="text-2xl mb-[30px]">
            Thanks for deciding to list your role here. For now its completely
            free to share your role with a world of talent, just fill out the
            form and find the perfect candidate.
          </p>
          <JobUploadForm />
        </div>
      </div>
    </Layout>
  );
};

export default JobUpload;
