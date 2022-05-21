import React, { FC } from 'react'
import { Nav, Foot } from './index'
import { Outlet } from 'react-router-dom'

const Layout: FC<React.PropsWithChildren<any>> = (props) => {
  return (
    <>
      <Nav />
      {props.children}
      <Foot></Foot>
    </>
  )
}

export { Layout }
