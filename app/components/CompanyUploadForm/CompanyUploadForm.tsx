"use client";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { useFormState } from "react-dom";
import { postCompany } from "../../lib/data";
import DOMPurify from "dompurify";
import dynamic from "next/dynamic";

export default function CompanyUploadForm() {
  const [state, formAction] = useFormState(postCompany, {});
  const [htmlContent, setHtmlContent] = useState("");

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

  const handleInputChange = (content: string) => {
    // Sanitize HTML content
    const sanitizedContent = DOMPurify.sanitize(content);
    setHtmlContent(sanitizedContent);
    state.company_description = sanitizedContent;
  };
  if (state?.success) {
    alert("Company successfully uploaded!");
  } else if (state?.error) {
    alert("Error uploading company");
  }

  return (
    <div>
      <form
        action={formAction}
        className="flex flex-col gap-2 m-auto items-center caret-black dark:caret-white text-xl"
      >
        <FormInput
          type={"text"}
          labelText={"Company Name:"}
          required={true}
          id={"company_name"}
        />
        <FormInput
          type={"text"}
          labelText={"Company URL:"}
          required={true}
          id={"company_url"}
        />
        <FormInput
          type={"text"}
          labelText={"Company industry:"}
          required={false}
          id={"company_industry"}
        />
        <FormInput
          type={"text"}
          labelText={"Company address:"}
          required={false}
          id={"company_address"}
        />
        <FormInput
          type={"text"}
          labelText={"Company logo URL:"}
          required={false}
          id={"company_logo"}
        />
        <FormInput
          type={"text"}
          labelText={"Careers url:"}
          required={false}
          id={"company_careers_url"}
        />
        <FormInput
          type={"text"}
          labelText={"SNS url:"}
          required={false}
          id={"company_sns_url"}
        />
        <label
          htmlFor="korean_level_required"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        >
          Korean level:
        </label>
        <select
          className="mb-2 p-2 text-xl  dark:bg-[#222] rounded-lg border-2 border-[#121212] focus:outline-none focus:border-[#3758f9] focus:ring-1 focus:ring-[#3758f9]"
          id="korean_level_required"
          required
          name="korean_level_required"
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
          htmlFor="business_language"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        >
          Business language:
        </label>
        <select
          className="mb-2 p-2 text-xl rounded-lg border-2 dark:bg-[#222] border-[#121212] focus:outline-none focus:border-[#3758f9] focus:ring-1 focus:ring-[#3758f9]"
          id="business_language"
          name="business_language"
          required
        >
          <option value="" disabled>
            --Business language--
          </option>
          <option value="English">English</option>
          <option value="Korean">Korean</option>
          <option value="Mixed">Mixed</option>
        </select>
        <label htmlFor={"company_description"}>Description:</label>
        <ReactQuill
          value={htmlContent}
          modules={modules}
          onChange={handleInputChange}
          className="rounded-lg"
          theme="snow"
          id={"company_description"}
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
