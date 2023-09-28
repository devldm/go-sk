import styles from "./Button.module.css";

interface Props {
  applyUrl?: string;
  className?: string;
  buttonText: string;
}

export default function Button({ applyUrl, className, buttonText }: Props) {
  return (
    <a target="_blank" rel="noreferrer" href={`https://${applyUrl}`}>
      <button
        className={`${styles.button} ${className}`}
        onClick={() => console.log(applyUrl)}
      >
        {buttonText}
      </button>
    </a>
  );
}
