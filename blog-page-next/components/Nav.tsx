import styles from './Nav.module.scss'
import Link from 'next/link'
const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link href="/">主页</Link>
        </li>
        <span className={styles.hr}>-</span>
        <li>
          <Link href="/blog">博客</Link>
        </li>
        <span className={styles.hr}>-</span>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
      </ul>
    </div>
  )
}

export { Nav }
