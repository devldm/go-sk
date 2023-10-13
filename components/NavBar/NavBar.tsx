import styles from "./NavBar.module.css";
import Link from "next/link";
import skFlag from "../../public/sk.svg";
import Image from "next/image";
import Button from "../Button/Button";

export default function NavBar() {
  return (
    <div className={styles.navBox}>
      <div className={styles.navFlex}>
        <div className={styles.logo}>
          <Image
            src={skFlag}
            className={styles.logoSvg}
            alt="go-sk logo. svg of South Korean flag and the text go-sk"
          />
          <Link href="/">
            <h2 className={styles.logoText}>GO-SK</h2>
          </Link>
        </div>
        <div className={styles.linkFlex}>
          <Link href="/jobs">Jobs</Link>
          <Link href="/jobUpload">
            <Button buttonText="Upload a role" className={styles.navButton} />
          </Link>
        </div>
      </div>
    </div>
  );
}
