import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CarCard from './CarCard'
import Search from '../Component/Search/Search'
import style from './pages.module.css'

const Result = () => {
  const [cars, setCars] = useState([]);
    useEffect(() => {
        axios.get('https://rent-cars-api.herokuapp.com/admin/car')
            .then(res => {
                setCars(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
  return (
    <>
        <div className={style.emptySpace}></div>
        <Search />
        <div className='container'>
          <div className={style.resultContainer}>
            {cars && cars.map((car, index) => {
                return(
                        <CarCard 
                            key={index}
                            id={car.id}
                            name={car.name}
                            price={car.price}
                            image={car.image}
                        />
                      )        
                  })}
          </div>
        </div>
        
    </>
  )
}

export default Result