import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Layout, Content } from '../components'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{"welcome to Leo's blog"}</title>
      </Head>
      <Content>
        <div>this is the Homepagafae</div>
      </Content>
    </Layout>
  )
}

export default Home
