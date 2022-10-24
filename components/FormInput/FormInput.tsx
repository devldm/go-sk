import React from "react";
import styles from "./FormInput.module.css";

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
      <label htmlFor={id} className={required == true ? styles.required : ""}>
        {labelText}
      </label>
      <input
        type={type}
        required={required}
        id={id}
        name={id}
        onChange={onChange}
      />
    </>
  );
}
