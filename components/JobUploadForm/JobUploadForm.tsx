import React, { useState } from 'react'
import styles from './JobUploadForm.module.css'

type Job = {
    job_id: string,
    job_title: string,
    company_name: string,
    location: string,
    job_description: string,
}

export default function JobUploadForm() {
    const defaultJobForm: Job = {
        job_id: '',
        job_title: '',
        company_name: '',
        location: '',
        job_description: ''
    }

    const [formState, setFormState] = useState(defaultJobForm);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const data: Job = {
            job_id: self.crypto.randomUUID(),
            job_description: formState.job_description,
            job_title: formState.job_title,
            location: formState.location,
            company_name: formState.company_name
        }

        const response = await fetch("/api/jobs", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <div >
            <form onSubmit={handleSubmit} className={styles.jobUploadForm}>
                <label htmlFor="jobTitle">Job title:</label>
                <input required type="text" id="jobTitle" name="jobTitle" onChange={(e) => setFormState({
                    ...formState,
                    job_title: e.target.value
                })} />
                <label htmlFor="companyName">Company name:</label>
                <input type="text" id="companyName" name="companyName" onChange={(e) => setFormState({
                    ...formState,
                    company_name: e.target.value
                })} />
                <label htmlFor="location">Location:</label>
                <input required type="text" id="location" name="location" onChange={(e) => setFormState({
                    ...formState,
                    location: e.target.value
                })} />
                <label htmlFor="jobDescription">Job description:</label>
                <input required type="text" id="jobDescription" name="jobDescription" onChange={(e) => setFormState({
                    ...formState,
                    job_description: e.target.value
                })} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

