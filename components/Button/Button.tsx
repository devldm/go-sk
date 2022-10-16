import styles from "./Button.module.css";

interface Props {
  applyUrl?: string;
  className?: string;
  buttonText: string;
}

export default function Button({ applyUrl, className, buttonText }: Props) {
  function timeTest() {
    const timePosted = new Date();
    console.log("hi");
    console.log(timePosted.toISOString());
  }

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={applyUrl}
      onClick={() => timeTest()}
    >
      <button className={`${styles.button} ${className}`}>{buttonText}</button>
    </a>
  );
}
