import { Job } from "../../types";
import styles from "./JobPreview.module.css";

interface Props {
  jobProps?: Job;
}

export default function JobPreview({ jobProps }: Props) {
  return (
    <div className={styles.jobPostContainer}>
      <div className={styles.headingFlex}>
        <div className={styles.titleLocation}>
          <h1 className={styles.jobTitle}>{jobProps?.job_title}</h1>
          <p className={styles.jobLocation}>{jobProps?.location}</p>
        </div>
        <div className={styles.companyName}>{jobProps?.company_name}</div>
      </div>
    </div>
  );
}
