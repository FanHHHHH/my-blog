import { remark } from 'remark'
import html from 'remark-html'
import marked from 'marked'

export default async function markdownToHtml(markdown: any) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
