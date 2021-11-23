import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <section id='topbar' className='d-flex align-items-center'>
      <div className='container d-flex justify-content-center justify-content-md-between'>
        <div className='contact-info d-flex align-items-center'>
          <i className='bi bi-envelope-fill' />
          <Link to='mailto:contact@example.com'>info@example.com</Link>
          <i className='bi bi-phone-fill phone-icon' /> +1 5589 55488 55
        </div>
        <div className='social-links d-none d-md-block'>
          <Link to='#' className='twitter'>
            <i className='bi bi-twitter' />
          </Link>
          <Link to='#' className='facebook'>
            <i className='bi bi-facebook' />
          </Link>
          <Link to='#' className='instagram'>
            <i className='bi bi-instagram' />
          </Link>
          <Link to='#' className='linkedin'>
            <i className='bi bi-linkedin' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TopBar
