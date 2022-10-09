import styles from "./NavBar.module.css";
import Link from "next/link";
import skFlag from "../../public/sk.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className={styles.navBox}>
    <div className={styles.navFlex}>
      <div className={styles.logo}>
        <Image src={skFlag} />
        <Link href="/">
          <a><h2 className={styles.logoText}>GO-SK</h2></a>
        </Link>
      </div>
      <div className={styles.linkFlex}>
        <Link href="/jobs">
          <a className={styles.link}>Jobs</a>
        </Link>
      </div>
    </div>
    </div>
  );
}
