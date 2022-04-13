import React from 'react'
import { Link } from 'react-router-dom'

import style from './pages.module.css'

const CarCard = (props) => {
  return (
    <>
        <div className="card mb-5" >
            <img className={`cardImage ${style.carImage}`} src={props.image} alt=''/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h5 className="card-title">Rp {props.price} / Hari</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p> <img src="/Images/fi_users.png" alt=''/> 4 orang</p>
                <p> <img src="/Images/fi_settings.png" alt=''/> Manual</p>
                <p> <img src="/Images/fi_calendar.png" alt=''/> Tahun 2022</p>
                <Link to={`/detail/${props.id}`} className="btn btn-success btn-block">
                    Pilih Mobil
                </Link>
            </div>
        </div>
    </>
  )
}

export default CarCard