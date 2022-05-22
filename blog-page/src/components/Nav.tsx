import { Link, Outlet } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">主页</Link>
        </li>
        <li>
          <Link to="/blog">博客</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export { Nav }
