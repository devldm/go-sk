import styles from "./HeroHome.module.css";
import Image from "next/image";
import skImage from "../../public/skImage2.jpg";
import Link from "next/link";
import Button from "../Button/Button";

export default function HeroHome() {
  return (
    <div className={styles.heroHomeContainer}>
      <div className={styles.heroText}>
        <h1 className={styles.title}>
          Start your journey to <br />
          <span className={styles.cityName}>South Korea</span>
        </h1>

        <p className={styles.description}>
          {`We aim to be the bridge between the worlds talent and South Korea's
          vibrant economy`}{" "}
        </p>

        <Link href="/jobs">
          <Button buttonText="See our jobs" className={styles.jobsCta} />
        </Link>
      </div>
      <div className={styles.heroImage}>
        <Image
          src={skImage}
          className={styles.landingImage}
          priority
          alt="View of N Seoul Tower"
        />
      </div>
    </div>
  );
}
