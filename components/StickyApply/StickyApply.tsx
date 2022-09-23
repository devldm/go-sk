import styles from "./StickyApply.module.css";

interface Props {
  applyUrl?: string;
}

export default function StickyApply({ applyUrl }: Props) {
  return (
    <a target="_blank"  rel="noreferrer" href={applyUrl}>
      <button className={styles.button}>Apply</button>
    </a>
  );
}
