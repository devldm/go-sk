import { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  applyUrl?: string;
  customClassName?: string;
  buttonText: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export default function Button({
  applyUrl,
  customClassName,
  buttonText,
  type,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-md bg-[#3758f9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2c45c1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${customClassName}`}
      onClick={() => {
        if (applyUrl) {
          window.location.href = `https://${applyUrl}`;
        }
      }}
    >
      {buttonText}
    </button>
  );
}
