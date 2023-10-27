import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import { Job } from "../../types";
import FormInput from "../FormInput/FormInput";
import JobPreview from "../JobPreview/JobPreview";
import Button from "../Button/Button";

export default function JobUploadForm() {
  const defaultJobForm: Job = {
    job_id: "",
    job_title: "",
    company_name: "",
    location: "",
    job_description: "",
    apply_url: "",
    linkedin_url: "",
    posted_datetime: "",
    role_type: "",
    experience_level: "",
    remote_level: "",
    salary_min: 0,
    salary_max: 0,
    currency: "",
  };

  const [formState, setFormState] = useState(defaultJobForm);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const isoDateString = new Date();

    const data: Job = {
      job_id: self.crypto.randomUUID(),
      job_description: DOMPurify.sanitize(formState.job_description ?? "null"),
      job_title: formState.job_title,
      location: formState.location,
      company_name: formState.company_name,
      apply_url: formState.apply_url,
      linkedin_url: formState.linkedin_url,
      posted_datetime: isoDateString.toISOString(),
      role_type: formState.role_type,
      experience_level: formState.experience_level,
      remote_level: formState.remote_level,
      salary_min: formState.salary_min,
      salary_max: formState.salary_max,
      currency: formState.currency,
    };

    const response = await fetch("/api/postJob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Job submitted successfully! It'll be on the jobs page soon.");
    } else {
      alert("Job post failed. Please try again later.");
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

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col m-auto items-center caret-white text-xl"
      >
        <FormInput
          type={"text"}
          labelText={"Job title:"}
          required={true}
          id={"jobTitle"}
          onChange={(e) =>
            setFormState({
              ...formState,
              job_title: e.target.value,
            })
          }
        />
        <FormInput
          type={"text"}
          labelText={"Company name:"}
          required={true}
          id={"companyName"}
          onChange={(e) =>
            setFormState({
              ...formState,
              company_name: e.target.value,
            })
          }
        />
        <FormInput
          type={"text"}
          labelText={"Location:"}
          required={true}
          id={"location"}
          onChange={(e) =>
            setFormState({
              ...formState,
              location: e.target.value,
            })
          }
        />
        <FormInput
          type={"text"}
          labelText={"Job Posting Url:"}
          required={true}
          id={"applyurl"}
          onChange={(e) =>
            setFormState({
              ...formState,
              apply_url: e.target.value,
            })
          }
        />
        <FormInput
          type={"text"}
          labelText={"Company LinkedIn Url:"}
          required={true}
          id={"linkedinUrl"}
          onChange={(e) =>
            setFormState({
              ...formState,
              linkedin_url: e.target.value,
            })
          }
        />
        <label htmlFor="roleType">Role type:</label>
        <select
          className="mb-2 p-2 text-xl rounded-lg border-2 border-[#121212]"
          id="roleType"
          name="roleType"
          onChange={(e) =>
            setFormState({
              ...formState,
              role_type: e.target.value,
            })
          }
        >
          <option value="" disabled selected>
            Type of role
          </option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
          <option value="Part time">Part time</option>
          <option value="Full time">Full time</option>
        </select>
        <label htmlFor="jobLevel">Experience level:</label>
        <select
          className="mb-2 p-2 text-xl rounded-lg border-2 border-[#121212]"
          id="experienceLevel"
          name="experienceLevel"
          onChange={(e) =>
            setFormState({
              ...formState,
              experience_level: e.target.value,
            })
          }
        >
          <option value="" disabled selected>
            Experience expected
          </option>
          <option value="Entry level">Entry level</option>
          <option value="Mid level">Mid level</option>
          <option value="Senior level">Senior level</option>
        </select>
        <label htmlFor="remoteOrNot">Remote, Hybrid or On-site:</label>
        <select
          className="mb-2 p-2 text-xl rounded-lg border-2 border-[#121212]"
          id="remoteOrNot"
          name="remoteOrNot"
          onChange={(e) =>
            setFormState({
              ...formState,
              remote_level: e.target.value,
            })
          }
        >
          <option value="" disabled selected>
            Remote, Hybrid or On-site
          </option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-Site">On-Site</option>
        </select>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="">
            <label htmlFor="currency">Currency:</label>
            <select
              className="mb-2 p-2 text-xl rounded-lg border-2 border-[#121212]"
              id="currency"
              name="currency"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  currency: e.target.value,
                })
              }
            >
              <option value="" disabled selected>
                Currency:
              </option>
              <option value="KRW">KRW</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div className="flex flex-col justify-between">
            <FormInput
              type={"number"}
              labelText={"Minimum Salary:"}
              required={false}
              id={"min"}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  salary_min: Number(e.target.value),
                })
              }
            />
          </div>
          <div className="flex flex-col justify-between">
            <FormInput
              type={"number"}
              labelText={"Maximum Salary:"}
              required={false}
              id={"max"}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  salary_max: Number(e.target.value),
                })
              }
            />
          </div>
        </div>
        <label htmlFor="jobDescription">Job description:</label>
        <ReactQuill
          className=""
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
        <Button
          type="submit"
          buttonText={"Submit"}
          customClassName="lg:max-w-[50%] w-[100%]"
        />
      </form>
      <div className="pb-10">
        <h1 className="text-4xl mt-6">Preview your role</h1>
        <p className="text-xl mt-2 mb-4">
          Start filling out the form to see what your listing will look like on
          our jobs list.
        </p>
        {(formState.job_title ||
          formState.company_name ||
          formState.location ||
          formState.experience_level ||
          formState.remote_level ||
          formState.role_type) && <JobPreview jobProps={formState} />}
      </div>
    </div>
  );
}
