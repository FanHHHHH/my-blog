import styles from './markdown-styles.module.scss'
import { marked } from 'marked'
import 'github-markdown-css'

export default function PostBody({ content }: any) {
  return (
    <>
      <div className="markdown-body" style={{ boxSizing: 'border-box', minWidth: '200px', maxWidth: '980px', margin: '0 auto', background: '#f9f5d7' }} dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </>
  )
}
