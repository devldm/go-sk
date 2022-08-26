import styles from './JobPost.module.css';


type Job = {
    job_id: string,
    job_title: string,
    company_name: string,
    location: string,
    job_description: string,
}

interface Props {
    jobProps?: Job
}

export default function JobPost({jobProps}: Props) {
    return (
    <div className={styles.jobPostContainer}>
        <div className={styles.headingFlex}>
            <div>
        <h1 className={styles.jobTitle}>{jobProps?.job_title}</h1>
        <p className={styles.jobLocation}>{jobProps?.location}</p>
        </div>
        <div>{jobProps?.company_name}</div>
        </div>
        <p>{jobProps?.job_description}</p>
  </div>
  )
}

