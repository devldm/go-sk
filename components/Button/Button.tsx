import styles from "./Button.module.css";

interface Props {
  applyUrl?: string;
  className?: string;
  buttonText: string;
}

export default function Button({ applyUrl, className, buttonText }: Props) {
  return (
    <a target="_blank" rel="noreferrer" href={applyUrl}>
      <button className={`${styles.button} ${className}`}>{buttonText}</button>
    </a>
  );
}
