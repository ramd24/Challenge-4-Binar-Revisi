import React from 'react'
import { Link } from 'react-router-dom'
import style from './search.module.css'

const Search = () => {
  return (
    <>
        <div>
            <form id='carSearch'>
                <div className={style.searchContainer}>
                    <div className={style.searchType}>
                        <label>Tipe Driver</label>
                        <select placeholder='Pilih Tipe Driver'>
                            <option>Dengan Sopir</option>
                            <option>Tanpa Sopir (Lepas Kunci)</option>                           
                        </select>
                    </div>
                    <div className={style.searchType}>
                        <label>Tanggal</label>
                        <input type="date" placeholder='Pilih Tanggal'></input>
                    </div>
                    <div className={style.searchType}>
                        <label>Waktu Jemput/Ambil</label>
                        <input type="time"></input>
                    </div>
                    <div className={style.searchType}>
                        <label>Jumlah Penumpang (optional)</label>
                        <input type="text"></input>
                    </div>
                    <Link to={`/result/`} className={style.submit}>
                        <button type='submit'>Cari Mobil</button>
                    </Link>
                </div>
            </form>
        </div>
    </>
  )
}

export default Search