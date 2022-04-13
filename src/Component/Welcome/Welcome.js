import React from 'react'
import style from './welcome.module.css'

const Welcome = () => {
  return (
    <>
        <section className='welcome d-flex align-item-center' style={{backgroundColor:'#F1F3FF'}}>
            <div className='container-fluid mt-5 d-flex'>
                <div className='container'>
                    <div className="row px-5">
                        <div className={`col-6 ${style.welcomeText}`}>
                            <h1 className="sewa">Sewa dan Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
                            <p className="selamat">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebututhanmu untuk sewa mobil selama 24 jam.</p>
                        </div>
                        <div className={`col-6 ${style.welcomeImage}`}>
                            <img src="/Images/img_car.png" alt="Gambar Mobil"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Welcome