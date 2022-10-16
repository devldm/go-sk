import styles from "./HeroHome.module.css";
import Image from "next/future/image";
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
          We aim to be the bridge between the worlds talent and South Korea
          vibrant economy{" "}
        </p>

        <Link href="/jobs">
          {/* <button className={styles.jobsCta}>See our Jobs</button> */}
          <a href="">
            <Button buttonText="See our jobs" className={styles.jobsCta} />
          </a>
        </Link>
      </div>
      <div className={styles.heroImage}>
        <Image src={skImage} className={styles.landingImage} priority />
      </div>
    </div>
  );
}
