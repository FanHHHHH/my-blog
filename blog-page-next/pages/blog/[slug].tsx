import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/Post/post-body'
import PostHeader from '../../components/Post/post-header'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/Post/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import { Content, Layout } from '../../components'

export default function Post({ post }: any) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Content>
        {/* <div>{post}</div> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article>
            <Head>
              <title>
                {post.title} | {"Leo's Blogs"}
              </title>
            </Head>
            <PostHeader title={post.title} date={post.date} author={post.author} />
            <PostBody content={post.content} />
          </article>
        )}
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
