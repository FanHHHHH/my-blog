import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to="/">主页</Link>
      <Link to="/blog">博客</Link>
      <Link to="/resume">Resume</Link>
      <Outlet />
    </div>
  )
}

export { Nav }
