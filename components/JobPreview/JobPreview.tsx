import { Job } from "../../types";
import { getTimeSincePosting } from "../../utils/getTimeSincePosting";
import DetailsPill from "../detailsPill/DetailsPill";
import styles from "./JobPreview.module.css";

interface Props {
  jobProps?: Job;
}

export default function JobPreview({ jobProps }: Props) {
  return (
    <div className={styles.extraDeets}>
      <div className={styles.jobPostContainer}>
        <div className={styles.headingFlex}>
          <div className={styles.titleLocation}>
            <h1 className={styles.jobTitle}>{jobProps?.job_title}</h1>
            <p className={styles.jobLocation}>{jobProps?.location}</p>
          </div>
        </div>
        <hr />
        <div className={styles.moreDetails}>
          <div className={styles.companyName}>{jobProps?.company_name}</div>
          <div className={styles.posted}>
            {getTimeSincePosting(jobProps?.posted_datetime!)}
          </div>
        </div>
      </div>
      <div className={styles.detailPillContainer}>
        {jobProps?.remote_level && (
          <DetailsPill jobProps={jobProps?.remote_level} />
        )}
        {jobProps?.experience_level && (
          <DetailsPill jobProps={jobProps?.experience_level} />
        )}
        {jobProps?.role_type && <DetailsPill jobProps={jobProps?.role_type!} />}
      </div>
    </div>
  );
}
