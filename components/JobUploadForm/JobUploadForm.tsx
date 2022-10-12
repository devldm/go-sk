import React, { useState } from "react";
import styles from "./JobUploadForm.module.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import { Job } from "../../types";

export default function JobUploadForm() {
  const defaultJobForm: Job = {
    job_id: "",
    job_title: "",
    company_name: "",
    location: "",
    job_description: "",
    apply_url: "",
    linkedin_url: "",
  };

  const [formState, setFormState] = useState(defaultJobForm);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data: Job = {
      job_id: self.crypto.randomUUID(),
      job_description: DOMPurify.sanitize(formState.job_description ?? "null"),
      job_title: formState.job_title,
      location: formState.location,
      company_name: formState.company_name,
      apply_url: formState.apply_url,
      linkedin_url: formState.linkedin_url,
    };

    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Job submitted successfully! It'll be on the jobs page soon.");
    } else {
      alert("Job post failed. Please try again laters");
    }
  };

  const modules = {
    // https://github.com/quilljs/quill/issues/2905#issuecomment-683128521
    clipboard: {
      matchVisual: false,
    },
    toolbar: [
      [
        { size: [] },
        "bold",
        "italic",
        "underline",
        { color: [] },
        { background: [] },
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
        "link",
      ],
    ],
  };

  // TODO: ensrure back ground shows as expected on desktop if we go with that design

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.jobUploadForm}>
        <label htmlFor="jobTitle">Job title:</label>
        <input
          required
          type="text"
          id="jobTitle"
          name="jobTitle"
          onChange={(e) =>
            setFormState({
              ...formState,
              job_title: e.target.value,
            })
          }
        />
        <label htmlFor="companyName">Company name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          onChange={(e) =>
            setFormState({
              ...formState,
              company_name: e.target.value,
            })
          }
        />
        <label htmlFor="location">Location:</label>
        <input
          required
          type="text"
          id="location"
          name="location"
          onChange={(e) =>
            setFormState({
              ...formState,
              location: e.target.value,
            })
          }
        />
        <label htmlFor="applyUrl">Job Posting Url:</label>
        <input
          required
          type="text"
          id="applyurl"
          name="applyurl"
          onChange={(e) =>
            setFormState({
              ...formState,
              apply_url: e.target.value,
            })
          }
        />
        <label htmlFor="linkedinUrl">Company LinkedIn Url:</label>
        <input
          required
          type="text"
          id="linkedinUrl"
          name="linkedinUrl"
          onChange={(e) =>
            setFormState({
              ...formState,
              linkedin_url: e.target.value,
            })
          }
        />
        <label htmlFor="jobDescription">Job description:</label>
        <ReactQuill
          className={styles.qlEditor}
          theme="snow"
          modules={modules}
          onChange={(e) =>
            setFormState({
              ...formState,
              job_description: e,
            })
          }
        />
        <br />
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </div>
  );
}
