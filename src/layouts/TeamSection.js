import React from 'react'
import { Link } from 'react-router-dom'

const TeamSection = () => {
  return (
    <section id='team' className='team'>
      <div className='container'>
        <div className='section-title'>
          <span>Team</span>
          <h2>Team</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-6 d-flex align-items-stretch' data-aos='zoom-in'>
            <div className='member'>
              <img src='assets/img/team/team-1.jpg' alt='uma' />
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <p>Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</p>
              <div className='social'>
                <Link to='/'>
                  <i className='bi bi-twitter' />
                </Link>
                <Link to='/'>
                  <i className='bi bi-facebook' />
                </Link>
                <Link to='/'>
                  <i className='bi bi-instagram' />
                </Link>
                <Link to='/'>
                  <i className='bi bi-linkedin' />
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 d-flex align-items-stretch' data-aos='zoom-in'>
            <div className='member'>
              <img src='assets/img/team/team-2.jpg' alt='imhg' />
              <h4>Sarah Jhinson</h4>
              <span>Product Manager</span>
              <p>Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus</p>
              <div className='social'>
                <Link to='/'>
                  <i className='bi bi-twitter' />
                </Link>
                <Link to='/'>
                  <i className='bi bi-facebook' />
                </Link>
                <Link to='/'>
                  <i className='bi bi-instagram' />
                </Link>
                <Link to='/'>
                  <i className='bi bi-linkedin' />
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 d-flex align-items-stretch' data-aos='zoom-in'>
            <div className='member'>
              <img src='assets/img/team/team-3.jpg' alt='imhg' />
              <h4>William Anderson</h4>
              <span>CTO</span>
              <p>Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara</p>
              <div className='social'>
                <Link to='/'>
                  <i className='bi bi-twitter' />
                </Link>
                <Link to='/'>
                  <i className='bi bi-facebook' />
                </Link>
                <Link to='/'>
                  <i className='bi bi-instagram' />
                </Link>
                <Link to='/'>
                  <i className='bi bi-linkedin' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
