import React, { FC, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
// import logo from './logo.svg'
// import './App.css'
import { add } from 'rust-wasm'
import { Nav, Foot, Layout } from '../../components'

const Homepage = () => {
  //   useEffect(() => {
  //     add(1, 11)
  //   }, [])

  return (
    <Layout>
      <div>homeapge</div>
    </Layout>
  )
}

export { Homepage }
