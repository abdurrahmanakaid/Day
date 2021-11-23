import React from 'react'
import { Link } from 'react-router-dom'

const ServicesSection = () => {
  return (
    <section id='services' className='services'>
      <div className='container'>
        <div className='section-title'>
          <span>Services</span>
          <h2>Services</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-6 d-flex align-items-stretch' data-aos='fade-up'>
            <div className='icon-box'>
              <div className='icon'>
                <i className='bx bxl-dribbble' />
              </div>
              <h4>
                <Link to='/' />
                Lorem Ipsum
              </h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0' data-aos='fade-up' data-aos-delay={150}>
            <div className='icon-box'>
              <div className='icon'>
                <i className='bx bx-file' />
              </div>
              <h4>
                <Link to='/' />
                Sed ut perspiciatis
              </h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0' data-aos='fade-up' data-aos-delay={300}>
            <div className='icon-box'>
              <div className='icon'>
                <i className='bx bx-tachometer' />
              </div>
              <h4>
                <Link to='/' />
                Magni Dolores
              </h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4' data-aos='fade-up' data-aos-delay={450}>
            <div className='icon-box'>
              <div className='icon'>
                <i className='bx bx-world' />
              </div>
              <h4>
                <Link to='/' />
                Nemo Enim
              </h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4' data-aos='fade-up' data-aos-delay={600}>
            <div className='icon-box'>
              <div className='icon'>
                <i className='bx bx-slideshow' />
              </div>
              <h4>
                <Link to='/' />
                Dele cardo
              </h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4' data-aos='fade-up' data-aos-delay={750}>
            <div className='icon-box'>
              <div className='icon'>
                <i className='bx bx-arch' />
              </div>
              <h4>
                <Link to='/' />
                Divera don
              </h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
