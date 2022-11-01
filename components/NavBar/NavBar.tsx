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
            <a>
              <h2 className={styles.logoText}>GO-SK</h2>
            </a>
          </Link>
        </div>
        <div className={styles.linkFlex}>
          <Link href="/jobs">
            <div className={styles.navItemsContainer}>
              <a className={styles.link}>Jobs</a>
            </div>
          </Link>
          <Link href="/jobUpload">
            <a href="">
              <Button buttonText="Upload a role" className={styles.navButton} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
