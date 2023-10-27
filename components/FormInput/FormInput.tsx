import React from "react";

interface Props {
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
}: Props) {
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
        className="mb-2 p-2 text-xl rounded-lg border-2 border-[#121212]"
        type={type}
        required={required}
        id={id}
        name={id}
        onChange={onChange}
      />
    </>
  );
}
