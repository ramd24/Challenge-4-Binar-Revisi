import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import Search from '../Component/Search/Search'
import style from './pages.module.css'

const Detail = () => {

  const param = useParams()
  const [car, setCar] = useState()
  useEffect(() => {
    axios.get(`https://rent-cars-api.herokuapp.com/admin/car/${param.id}`)
        .then(res => {
            setCar(res.data)
        })
        .catch(err => {
            console.log(err)
        })
  }, [])

  return (
    <>
        <div className={style.emptySpace}></div>
        <Search />
        <div className={`row ${style.detailContainer}`}>
            <div className='col-7'>
                <div className={`col-12 ${style.detailCard}`}>
                    <h6 className='font-weight-bold'>Tentang Paket</h6>
                    <p>Include</p>
                    <ul>
                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                    </ul>
                    <p>Exclude</p>
                    <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                    <h6 className='font-weight-bold'>Refund, Reschedule, Overtime</h6>
                    <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                </div>
            </div>
            <div className='col-5'>
                {car &&
                    <div className={`text-center ${style.detailCacard}`}>
                        <img src='/Images/resultcar.png' className={style.carImage} alt=''/>
                        <div className='card-body text-left'>
                            <h6 className='font-weight-bold'>{car.name}</h6>
                            <p className='card-text' style={{color: '#8A8A8A'}}>
                                <img src='/Images/fi_users.png' alt=''/>	&nbsp;
                                4 orang	&nbsp;
                                <img src='/Images/fi_settings.png' alt=''/>	&nbsp;
                                Manual	&nbsp;
                                <img src='/Images/fi_calendar.png' alt=''/>	&nbsp;
                                Tahun 2020
                            </p>
                            <div className='row justify-content-between mt-4'>
                                <p>Total</p>
                                <p className='font-weight-bold'>Rp. {car.price}</p>
                            </div>
                        </div>
                        <button className='btn btn-success w-100'>
                            lanjutkan pembayaran
                        </button>
                    </div>
                }
            </div>
        </div>
    </>
  )
}

export default Detail