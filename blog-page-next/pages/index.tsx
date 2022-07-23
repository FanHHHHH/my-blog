import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Layout, Content } from '../components'
import styles from './index.module.scss'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{"welcome to Leo's blog"}</title>
      </Head>
      <Content>
        <div className={styles.indexLeft}>
          <h2>
            <span className={styles.me}>Leo He</span>
          </h2>
          <b>Frontend software engineer</b>
          <br />
          <b>Javascript/Rust</b>
          <br />
          <b>hefan813@vip.qq.com</b>
        </div>
        <div className={styles.indexRight}>right</div>
      </Content>
    </Layout>
  )
}

export default Home
