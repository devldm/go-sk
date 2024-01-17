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
import FormSelect from "../FormSelect";

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
        <FormSelect
          label={"Role type:"}
          htmlFor={"role_type"}
          id={"role_type"}
          placeholderOption={"--Type of role--"}
          selectOptions={["Internship", "Contract", "Part time", "Full time"]}
        />
        <FormSelect
          label={"Experience level:"}
          htmlFor={"experience_level"}
          id={"experience_level"}
          placeholderOption={"--Experience expected--"}
          selectOptions={["Entry level", "Mid level", "Senior level"]}
        />
        <FormSelect
          label={"Remote, Hybrid or On-site:"}
          htmlFor={"remote_level"}
          id={"remote_level"}
          placeholderOption={"--Remote, Hybrid or On-site--"}
          selectOptions={["Remote", "Hybrid", "On-site"]}
        />

        <div className="flex flex-col lg:gap-3 lg:flex-row items-center">
          <div>
            <FormSelect
              label={"Currency:"}
              htmlFor={"currency"}
              id={"currency"}
              placeholderOption={"Currency:"}
              selectOptions={["KRW", "USD", "GBP", "EUR", "JPY"]}
            />
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
