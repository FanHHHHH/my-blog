import styles from './Nav.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
  const route = useRouter().route.split('/')

  return (
    <div className={styles.nav}>
      <ul>
        <li className={route[1] === '' ? styles.active : ''}>
          <Link href="/">主页</Link>
        </li>
        <span className={styles.hr}>-</span>
        <li className={route[1] === 'blog' ? styles.active : ''}>
          <Link href="/blog">博客</Link>
        </li>
        <span className={styles.hr}>-</span>
        <li className={route[1] === 'resume' ? styles.active : ''}>
          <Link href="/resume">Resume</Link>
        </li>
      </ul>
    </div>
  )
}

export { Nav }
