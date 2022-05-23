import DateFormatter from './date-formatter'
import PostTitle from './post-title'

export default function PostHeader({ title, date, author }: any) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {author.name + '  |  '}
      <DateFormatter dateString={date} />
    </>
  )
}
