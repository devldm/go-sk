import type { NextComponentType, NextPage } from 'next'
import styles from './NavBar.module.css'
import Link from 'next/link'

const NavBar: NextComponentType = () => {
  return (
    <div className={styles.navFlex}>
      <div>
        <Link href="/">
          <h2>GO-SK</h2>
        </Link>
      </div>
      <div className={styles.linkFlex}>
        <Link href="/jobs">
          <a>Jobs</a>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
