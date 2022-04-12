import React from 'react'
import style from './header.module.css'

const Header = () => {
  return (
    <>
      <div className='container-fluid' style={{backgroundColor:'#F1F3FF'}}>
          <div className='container'>
            <div className='navbar'>
              <div className='logo'>
                <img src='/Images/logo.png' />
              </div>
              <div className='bagianKanan'>
                    <ul className={style.listMenu}>
                        <li className={style.listItem}><a className={style.aItem} href='#'>Our Services</a></li>
                        <li className={style.listItem}><a className={style.aItem} href='#'>Why Us</a></li>
                        <li className={style.listItem}><a className={style.aItem} href='#'>Testimonial</a></li>
                        <li className={style.listItem}><a className={style.aItem} href='#'>FAQ</a></li>
                        <li className={style.listItem}><button className={style.submit} type="submit">Register</button></li>
                    </ul>
              </div>
            </div>
          </div>
      </div>
        
    </>
  )
}

export default Header

    