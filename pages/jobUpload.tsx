import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar/NavBar'
import JobUploadForm from '../components/JobUploadForm/JobUploadForm';

type Job = {
    job_id: string,
    job_title: string,
    company_name: string,
    location: string,
    job_description: string,
}

type JobPostings = {
    jobs: Job[];
}


const JobUpload: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>GO-SK - Job Upload</title>
                <meta name="description" content="South Korea Jobs" />
                <link rel="icon" type="image/svg+xml" href="/sk.svg" sizes="any" />
            </Head>
            <NavBar />
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Job Upload
                </h1>
                <div className={styles.uploadForm}>
                    <JobUploadForm />
                </div>
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Mingo
                </a>
            </footer>
        </div>
    )
}

export default JobUpload

