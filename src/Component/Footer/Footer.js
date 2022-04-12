import React from 'react'
import style from './footer.module.css'

const Footer = () => {
  return (
    <>
        <div className='container'>
            <div className='footer'>
                <div className='row'>
                    <div className='col-3 address'>
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className={`col 3 ${style.footerNav}`}>
                        <ul className={style.footerList}>
                            <li className={style.footerListItem}><a className={style.aItem} href='#'>Our Services</a></li>
                            <li className={style.footerListItem}><a className={style.aItem} href='#'>Why Us</a></li>
                            <li className={style.footerListItem}><a className={style.aItem} href='#'>Testimonial</a></li>
                            <li className={style.footerListItem}><a className={style.aItem} href='#'>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-3 connect">
                        <p>Connect With Us</p>
                        <div className="socmed">
                            <img src="/Images/icon_facebook.png" className={style.socmedItem} />
                            <img src="/Images/icon_instagram.png" className={style.socmedItem} />
                            <img src="/images/icon_twitter.png" className={style.socmedItem} />
                            <img src="/images/icon_mail.png" className={style.socmedItem} />
                            <img src="/images/icon_twitch.png" className={style.socmedItem} />
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

export default Footer