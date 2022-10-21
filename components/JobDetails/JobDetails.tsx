import { Job } from "../../types";
import styles from "./JobDetails.module.css";

interface Props {
  job: Job;
}

export default function JobDetails({ job }: Props) {
  const noJobDetails =
    job.role_type ||
    job.experience_level ||
    job.salary_min ||
    job.salary_max ||
    job.remote_level;

  return (
    <>
      {noJobDetails && (
        <div className={styles.jobDetailsContainer}>
          <h3>Job Details</h3>
          <hr />
          <div className={styles.jobDetails}>
            {job.role_type && (
              <div className={styles.jobDetailContainer}>
                <p className={styles.detailSectionHeading}>Role type</p>
                <p className={styles.jobDetail}>{job.role_type}</p>
              </div>
            )}
            {job.experience_level && (
              <div className={styles.jobDetailContainer}>
                <p className={styles.detailSectionHeading}>Experience level</p>
                <p className={styles.jobDetail}>{job.experience_level}</p>
              </div>
            )}
            {job.remote_level && (
              <div className={styles.jobDetailContainer}>
                <p className={styles.detailSectionHeading}>Remote level</p>
                <p className={styles.jobDetail}>{job.remote_level}</p>
              </div>
            )}
            {job.salary_min! > 0 && job.salary_max! > 0 && (
              <div className={styles.jobDetailContainer}>
                <p className={styles.detailSectionHeading}>
                  Salary range {job.currency && `(${job.currency})`}
                </p>
                <p
                  className={styles.jobDetail}
                >{`${job.salary_min} - ${job.salary_max}`}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
