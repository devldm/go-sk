"use client";

import React from "react";
import "react-quill/dist/quill.snow.css";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { useFormState } from "react-dom";
import { postJob } from "../../lib/data";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import { useState } from "react";
import JobPreview from "../JobPreview/JobPreview";

export default function JobUploadForm() {
  const [state, formAction] = useFormState(postJob, {});
  const [htmlContent, setHtmlContent] = useState("");

  const handleInputChange = (content: string) => {
    // Sanitize HTML content
    const sanitizedContent = DOMPurify.sanitize(content);
    setHtmlContent(sanitizedContent);
    state.job_description = sanitizedContent;
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

  if (state.success) {
    alert("Job submitted successfully! It'll be on the jobs page soon.");
  } else if (state.error) {
    alert("Job post failed. Please try again later.");
  }

  return (
    <div>
      <form
        action={formAction}
        className="flex flex-col gap-2 m-auto items-center caret-black dark:caret-white text-xl"
      >
        <FormInput
          type={"text"}
          labelText={"Job title:"}
          required={true}
          id={"job_title"}
        />
        <FormInput
          type={"text"}
          labelText={"Company name:"}
          required={true}
          id={"company_name"}
        />
        <FormInput
          type={"text"}
          labelText={"Location:"}
          required={true}
          id={"location"}
        />
        <FormInput
          type={"text"}
          labelText={"Job Posting Url:"}
          required={true}
          id={"apply_url"}
        />
        <FormInput
          type={"text"}
          labelText={"Company LinkedIn Url:"}
          required={true}
          id={"linkedin_url"}
        />
        <label htmlFor="role_type">Role type:</label>
        <select
          className="mb-2 dark:bg-[#222] p-2 text-xl rounded-lg border-2 border-[#121212] focus:outline-none focus:border-[#3758f9] focus:ring-1 focus:ring-[#3758f9]"
          id="role_type"
          name="role_type"
        >
          <option value="" disabled>
            --Type of role--
          </option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
          <option value="Part time">Part time</option>
          <option value="Full time">Full time</option>
        </select>
        <label htmlFor="experience_level">Experience level:</label>
        <select
          className="mb-2 dark:bg-[#222] p-2 text-xl rounded-lg border-2 border-[#121212] focus:outline-none focus:border-[#3758f9] focus:ring-1 focus:ring-[#3758f9]"
          id="experience_level"
          name="experience_level"
        >
          <option value="" disabled>
            --Experience expected--
          </option>
          <option value="Entry level">Entry level</option>
          <option value="Mid level">Mid level</option>
          <option value="Senior level">Senior level</option>
        </select>
        <label htmlFor="remote_level">Remote, Hybrid or On-site:</label>
        <select
          className="mb-2 p-2 dark:bg-[#222] text-xl rounded-lg border-2 border-[#121212] focus:outline-none focus:border-[#3758f9] focus:ring-1 focus:ring-[#3758f9]"
          id="remote_level"
          name="remote_level"
        >
          <option value="" disabled>
            --Remote, Hybrid or On-site--
          </option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-Site">On-Site</option>
        </select>
        <div className="flex flex-col lg:gap-3 lg:flex-row items-center">
          <div className="">
            <label htmlFor="currency">Currency:</label>
            <select
              className="mb-2 p-2 dark:bg-[#222] text-xl rounded-lg border-2 border-[#121212] focus:outline-none focus:border-[#3758f9] focus:ring-1 focus:ring-[#3758f9]"
              id="currency"
              name="currency"
            >
              <option value="" disabled>
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
              id={"salary_min"}
            />
          </div>
          <div className="flex flex-col justify-between">
            <FormInput
              type={"number"}
              labelText={"Maximum Salary:"}
              required={false}
              id={"salary_max"}
            />
          </div>
        </div>
        <label htmlFor={"job_description"}>Description:</label>
        <ReactQuill
          value={htmlContent}
          onChange={handleInputChange}
          className="rounded-lg"
          theme="snow"
          modules={modules}
          id={"job_description"}
        />
        <br />
        <Button
          type="submit"
          buttonText={"Submit"}
          customClassName="lg:max-w-[50%] w-[100%] text-xl mb-10"
        />
      </form>
      {/* <div className="pb-10">
        <h1 className="text-4xl mt-6">Preview your role</h1>
        <p className="text-xl mt-2 mb-4">
          Start filling out the form to see what your listing will look like on
          our jobs list.
        </p>
        {(state.job_title ||
          state.company_name ||
          state.location ||
          state.experience_level ||
          state.remote_level ||
          state.role_type) && <JobPreview jobProps={state} />}
      </div> */}
    </div>
  );
}
