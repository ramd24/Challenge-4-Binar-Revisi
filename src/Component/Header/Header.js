import React from 'react'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg mt-2 sticky-top " style={{backgroundColor:'#F1F3FF'}}>
        <div className="container">
          <div className='logo'>
                <img src='/Images/logo.png' />
          </div>
          <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={"nav-link"} aria-current="page" href="#">Our Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Why Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Testimonial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">FAQ</a>
              </li>
              <li className="nav-item">
                <button className="register btn btn-success ml-3">Register</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        
    </>
  )
}

export default Header

    