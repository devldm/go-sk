import type { NextComponentType, NextPage } from 'next'
import styles from './NavBar.module.css'
import Link from 'next/link'

const NavBar: NextComponentType = () => {
  return (
    <div className={styles.navFlex}>
    <div>
      <h2>GO-SK</h2>
    </div>
    <div className={styles.linkFlex}>
      <Link href="/jobs">
        <a>Jobs</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  </div>
  )
}

export default NavBar
