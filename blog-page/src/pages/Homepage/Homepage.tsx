import React, { FC, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
// import logo from './logo.svg'
// import './App.css'
import { add } from 'rust-wasm'
import { Layout, Content } from '../../components'
import { readFileSync } from 'fs'


const Homepage = () => {
  //   useEffect(() => {
  //     add(1, 11)
  //   }, [])
//   const file = readFileSync('../../static/blog/hello_word.md')


  return (
    <Layout>
      <Content>
        <div>this is the Homepage</div>
      </Content>
    </Layout>
  )
}

export { Homepage }
