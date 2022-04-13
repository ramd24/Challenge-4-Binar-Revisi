import React from 'react'
import style from '../Component/Footer/footer.module.css'

const Layout = ({ children }) => {
  return (
    <>
        <nav className="navbar navbar-expand-lg mt-2 sticky-top " style={{backgroundColor:'#F1F3FF'}}>
          <div className="container">
            <div className='logo'>
                  <img src='/Images/logo.png' alt=''/>
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

        { children }
        
        <div className='container'>
            <div className='footer'>
                <div className='row'>
                    <div className='col-3'>
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className={`col-3 ${style.footerNav}`}>
                        <ul className={style.footerList}>
                            <li className={style.footerListItem}><a className={style.aItem} href='#'>Our Services</a></li>
                            <li className={style.footerListItem}><a className={style.aItem} href='#'>Why Us</a></li>
                            <li className={style.footerListItem}><a className={style.aItem} href='#'>Testimonial</a></li>
                            <li className={style.footerListItem}><a className={style.aItem} href='#'>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <p>Connect With Us</p>
                        <div className="socmed">
                            <img src="/Images/icon_facebook.png " className={style.socmedItem} alt=''/>
                            <img src="/Images/icon_instagram.png" className={style.socmedItem} alt=''/>
                            <img src="/images/icon_twitter.png" className={style.socmedItem} alt=''/>
                            <img src="/images/icon_mail.png" className={style.socmedItem} alt=''/>
                            <img src="/images/icon_twitch.png" className={style.socmedItem} alt=''/>
                        </div>
                    </div>
                    <div className="col-3">
                        <p>Copyright Binar 2022</p>
                        <img src="/Images/logo.png"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Layout