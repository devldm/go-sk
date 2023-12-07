import React from "react";

interface FormInputProps {
  type?: string;
  labelText: string;
  required: boolean;
  id: string;
  onChange: (e: any) => void;
}

export default function FormInput({
  type,
  labelText,
  required,
  id,
  onChange,
}: FormInputProps) {
  return (
    <>
      <label
        htmlFor={id}
        className={
          required == true
            ? `after:content-['*'] after:ml-0.5 after:text-red-500`
            : ""
        }
      >
        {labelText}
      </label>
      <input
        className="p-2 text-xl rounded-lg bg-[#222] ring-2 outline-none ring-inset ring-[#3f3e3e] focus:outline-none focus:border-[#3758f9] focus:ring-1 focus:ring-[#3758f9]"
        type={type}
        required={required}
        id={id}
        name={id}
        onChange={onChange}
      />
    </>
  );
}
