import styles from "./DetailsPill.module.css";

interface Props {
  jobProps?: string;
}

export default function DetailsPill({ jobProps }: Props) {
  return (
    <div className={styles.container}>
      <p>{jobProps}</p>
    </div>
  );
}
