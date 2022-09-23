import React, { useState } from "react";
import styles from "./JobUploadForm.module.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import { Job } from "../../types";

export default function JobUploadForm() {
  const defaultJobForm: Job = {
    jobid: "",
    jobtitle: "",
    companyname: "",
    joblocation: "",
    jobdescription: "",
    applyurl: "",
    linkedinurl: "",
  };

  const [formState, setFormState] = useState(defaultJobForm);
  const [value, setValue] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data: Job = {
      jobid: self.crypto.randomUUID(),
      jobdescription: DOMPurify.sanitize(formState.jobdescription ?? "null"),
      jobtitle: formState.jobtitle,
      joblocation: formState.joblocation,
      companyname: formState.companyname,
      applyurl: formState.applyurl,
      linkedinurl: formState.linkedinurl,
    };

    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
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
              jobtitle: e.target.value,
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
              companyname: e.target.value,
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
              joblocation: e.target.value,
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
              applyurl: e.target.value,
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
              linkedinurl: e.target.value,
            })
          }
        />
        <label htmlFor="jobDescription">Job description:</label>
        <ReactQuill
          theme="snow"
          modules={modules}
          onChange={(e) =>
            setFormState({
              ...formState,
              jobdescription: e,
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
