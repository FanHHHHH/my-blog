import { FC, PropsWithChildren } from 'react'
import styles from './Content.module.scss'

const Content: FC<PropsWithChildren<any>> = (props) => {
  return <div className={styles.contentWrapper}>{props.children}</div>
}

export { Content }
