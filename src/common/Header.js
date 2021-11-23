import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id='header' className='d-flex align-items-center'>
      <div className='container d-flex align-items-center justify-content-between'>
        <h1 className='logo'>
          <Link to='/'>Day</Link>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <Link to="/" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></Link>*/}
        <nav id='navbar' className='navbar'>
          <ul>
            <li>
              <Link className='nav-link scrollto active' to='#hero'>
                Home
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto' to='#about'>
                About
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto' to='#services'>
                Services
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto ' to='#portfolio'>
                Portfolio
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto' to='#pricing'>
                Pricing
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto' to='#team'>
                Team
              </Link>
            </li>
            <li className='dropdown'>
              <Link to='#'>
                <span>Drop Down</span> <i className='bi bi-chevron-down' />
              </Link>
              <ul>
                <li>
                  <Link to='#'>Drop Down 1</Link>
                </li>
                <li className='dropdown'>
                  <Link to='#'>
                    <span>Deep Drop Down</span> <i className='bi bi-chevron-right' />
                  </Link>
                  <ul>
                    <li>
                      <Link to='#'>Deep Drop Down 1</Link>
                    </li>
                    <li>
                      <Link to='#'>Deep Drop Down 2</Link>
                    </li>
                    <li>
                      <Link to='#'>Deep Drop Down 3</Link>
                    </li>
                    <li>
                      <Link to='#'>Deep Drop Down 4</Link>
                    </li>
                    <li>
                      <Link to='#'>Deep Drop Down 5</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='#'>Drop Down 2</Link>
                </li>
                <li>
                  <Link to='#'>Drop Down 3</Link>
                </li>
                <li>
                  <Link to='#'>Drop Down 4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className='nav-link scrollto' to='#contact'>
                Contact
              </Link>
            </li>
          </ul>
          <i className='bi bi-list mobile-nav-toggle' />
        </nav>
        {/* .navbar */}
      </div>
    </header>
  )
}

export default Header
