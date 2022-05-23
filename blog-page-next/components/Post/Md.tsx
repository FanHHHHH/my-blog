import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from './post-body'
import PostHeader from './post-header'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from './post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import { Content, Layout } from '..'

export interface postInf {
  title: string
  excerpt?: string
  date?: string
  author?: { name: string; picture?: string }
  slug?: string
  content?: string
}

export default function Md({ post, morePosts, preview }: any) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Content>
        {/* <div>{post}</div> */}
        <article>
          <Head>
            <title>
              {post.title} | {"Leo's Blogs"}
            </title>
          </Head>
          <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} />
          <PostBody content={post.content} />
        </article>
      </Content>
    </Layout>
  )
}

export async function getStaticProps({ params }: any) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content'])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
