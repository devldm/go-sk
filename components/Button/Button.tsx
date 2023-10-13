import { redirect } from "next/dist/server/api-utils";
import styles from "./Button.module.css";

interface Props {
  applyUrl?: string;
  className?: string;
  buttonText: string;
}

export default function Button({ applyUrl, className, buttonText }: Props) {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={() => console.log(applyUrl)}
    >
      <a href={`https://${applyUrl}`}>{buttonText}</a>
    </button>
  );
}
