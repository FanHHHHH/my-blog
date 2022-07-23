import DateFormatter from './date-formatter'
import PostTitle from './post-title'
import styles from './markdown-styles.module.scss'


export default function PostHeader({ title, date, author }: any) {
  return (
    <div className={styles.postHeader}>
      <PostTitle>{title}</PostTitle>
      {author.name + '  |  '}
      <DateFormatter dateString={date} />
    </div>
  )
}
