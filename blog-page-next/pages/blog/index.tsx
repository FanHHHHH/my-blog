import Head from 'next/head'
import React, { FC, useEffect } from 'react'
import { Layout, Content } from '../../components'

const Blog = () => {
  //   useEffect(() => {
  //     add(1, 11)
  //   }, [])
  //   const file = readFileSync('../../static/blog/hello_word.md')

  return (
    <Layout>
      <Head>
        <title>{"welcome to Leo's blog"}</title>
      </Head>
      <Content>
        <div>this is the BlogPage</div>
      </Content>
    </Layout>
  )
}

export default Blog
