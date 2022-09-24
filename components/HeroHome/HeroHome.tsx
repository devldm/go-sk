import styles from "./HeroHome.module.css";
import Image from "next/future/image";
import skImage from "../../public/skImage1.jpg";
import Link from "next/link";

export default function HeroHome() {
  return (
    <div className={styles.heroHomeContainer}>
      <div className={styles.heroText}>
        <h1 className={styles.title}>Start your journey to South Korea</h1>

        <p className={styles.description}>
          Find your dream role in South Korea{" "}
        </p>

        <Link href="/jobs"><button className={styles.jobsCta}>See our Jobs</button></Link>
      </div>
      <div className={styles.heroImage}>
        <Image src={skImage} className={styles.landingImage} priority />
      </div>
    </div>
  );
}
