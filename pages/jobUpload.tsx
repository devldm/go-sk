import type { NextPage } from "next";
import JobUploadForm from "../components/JobUploadForm/JobUploadForm";
import Layout from "../components/Layout/Layout";

const JobUpload: NextPage = () => {
  return (
    <Layout pageTitle={"Job Upload"}>
      <JobUploadForm />
    </Layout>
  );
};

export default JobUpload;
