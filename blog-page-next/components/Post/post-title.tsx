import styles from './markdown-styles.module.scss'

export default function PostTitle({ children }: any) {
  return <h1 className={styles.postTitle}>{children}</h1>
}
