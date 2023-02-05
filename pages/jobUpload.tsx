import type { NextPage } from "next";
import JobUploadForm from "../components/JobUploadForm/JobUploadForm";
import Layout from "../components/Layout/Layout";
import styles from "../styles/JobUpload.module.css";

const JobUpload: NextPage = () => {
  return (
    <Layout pageTitle={"Job Upload"}>
      <h1 className={styles.job_upload_title}>Upload your role</h1>
      <p className={styles.job_upload_para}>
        Thanks for deciding to list your role here. For now its completely free
        to share your role with a world of talent, just fill out the form and
        find the perfect candidate.
      </p>
      <JobUploadForm />
    </Layout>
  );
};

export default JobUpload;
