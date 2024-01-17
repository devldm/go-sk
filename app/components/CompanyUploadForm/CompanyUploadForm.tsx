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
import FormSelect from "../FormSelect";

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
        <FormSelect
          label={"Korean level:"}
          htmlFor={"korean_level_required"}
          id={"korean_level_required"}
          placeholderOption={"--Korean level required--"}
          selectOptions={["None", "Basic", "Intermediate", "Advanced"]}
        />
        <FormSelect
          label="Business language:"
          htmlFor="business_language"
          id={"business_language"}
          placeholderOption="--Business language--"
          selectOptions={["English", "Korean", "Mixed"]}
        />
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
