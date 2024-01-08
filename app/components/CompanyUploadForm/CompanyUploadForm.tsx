"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import { company } from "../../../types";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

const defaultCompanyForm: company = {
  company_id: "",
  company_name: "",
  business_language: "",
  company_address: "",
  korean_level_required: "",
  company_industry: "",
  company_logo: "",
  company_url: "",
  company_careers_url: "",
  company_sns_url: "",
  company_description: "",
};

export default function CompanyUploadForm() {
  const [formState, setFormState] = useState(defaultCompanyForm);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data: company = {
      company_id: self.crypto.randomUUID(),
      company_name: formState.company_name,
      business_language: formState.business_language,
      company_address: formState.company_address,
      korean_level_required: formState.korean_level_required,
      company_industry: formState.company_industry,
      company_logo: formState.company_logo,
      company_url: formState.company_url,
      company_careers_url: formState.company_careers_url,
      company_sns_url: formState.company_sns_url,
      company_description: DOMPurify.sanitize(
        formState.company_description ?? "null"
      ),
    };
    const response = await fetch("/api/companies/post-company", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data as company),
    });

    if (response.ok) {
      alert(
        "Company submitted successfully! It'll be on the companies page soon."
      );
    } else {
      alert("Company post failed. Please try again later.");
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
        className="flex flex-col gap-2 m-auto items-center caret-white text-xl"
      >
        <FormInput
          type={"text"}
          labelText={"Company Name:"}
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
          labelText={"Company URL:"}
          required={true}
          id={"companyUrl"}
          onChange={(e) =>
            setFormState({
              ...formState,
              company_url: e.target.value,
            })
          }
        />
        <FormInput
          type={"text"}
          labelText={"Company industry:"}
          required={false}
          id={"companyIndustry"}
          onChange={(e) =>
            setFormState({
              ...formState,
              company_industry: e.target.value,
            })
          }
        />
        <FormInput
          type={"text"}
          labelText={"Company address:"}
          required={false}
          id={"companyAddress"}
          onChange={(e) =>
            setFormState({
              ...formState,
              company_address: e.target.value,
            })
          }
        />
        <FormInput
          type={"text"}
          labelText={"Company logo URL:"}
          required={false}
          id={"companyLogo"}
          onChange={(e) =>
            setFormState({
              ...formState,
              company_logo: e.target.value,
            })
          }
        />
        <FormInput
          type={"text"}
          labelText={"Careers url:"}
          required={false}
          id={"companyCareersUrl"}
          onChange={(e) =>
            setFormState({
              ...formState,
              company_careers_url: e.target.value,
            })
          }
        />
        <FormInput
          type={"text"}
          labelText={"SNS url:"}
          required={false}
          id={"companySnsUrl"}
          onChange={(e) =>
            setFormState({
              ...formState,
              company_sns_url: e.target.value,
            })
          }
        />
        <label
          htmlFor="koreanLevelRequired"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        >
          Korean level:
        </label>
        <select
          className="mb-2 p-2 text-xl rounded-lg border-2 border-[#121212] focus:outline-none focus:border-[#3758f9] focus:ring-1 focus:ring-[#3758f9]"
          id="koreanLevelRequired"
          required
          name="koreanLevelRequired"
          value={formState.korean_level_required}
          onChange={(e) =>
            setFormState({
              ...formState,
              korean_level_required: e.target.value,
            })
          }
        >
          <option value="" disabled>
            --Korean level required--
          </option>
          <option value="None">None</option>
          <option value="Basic">Basic</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <label
          htmlFor="businessLanguage"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        >
          Business language:
        </label>
        <select
          className="mb-2 p-2 text-xl rounded-lg border-2 border-[#121212] focus:outline-none focus:border-[#3758f9] focus:ring-1 focus:ring-[#3758f9]"
          id="businessLanguage"
          value={formState.business_language}
          name="businessLanguage"
          required
          onChange={(e) =>
            setFormState({
              ...formState,
              business_language: e.target.value,
            })
          }
        >
          <option value="" disabled>
            --Business language--
          </option>
          <option value="English">English</option>
          <option value="Korean">Korean</option>
          <option value="Mixed">Mixed</option>
        </select>
        <label htmlFor="companyDescription">Company description:</label>
        <ReactQuill
          className="rounded-lg"
          theme="snow"
          modules={modules}
          onChange={(e) =>
            setFormState({
              ...formState,
              company_description: e,
            })
          }
        />
        <br />
        <Button
          type="submit"
          buttonText={"Submit"}
          customClassName="lg:max-w-[50%] w-[100%] text-xl mb-10"
        />
      </form>
    </div>
  );
}
