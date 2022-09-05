import styles from './JobPreview.module.css';


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

export default function JobPreview({ jobProps }: Props) {
    return (
        <div className={styles.jobPostContainer}>
            <div className={styles.headingFlex}>
                <div className={styles.titleLocation}>
                    <h1 className={styles.jobTitle}>{jobProps?.job_title}</h1>
                    <p className={styles.jobLocation}>{jobProps?.location}</p>
                </div>
                <div className={styles.companyName}>
                        {jobProps?.company_name}
                </div>
            </div>
            <hr className="solid"/>
            <p className={styles.jobDescription}>{jobProps?.job_description}</p>
        </div>
    )
}

