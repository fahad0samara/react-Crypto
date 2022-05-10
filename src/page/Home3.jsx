import React from 'react'
import img from '../img/6.png'

const Home3 = () => {
  return (
      <div className=' grid grid-cols-2  items-center  '>
          <img className='w-1/2 ml-52' src={img} alt="" />
          <img className='w-1/2 ml-32 hidden md:block'  src={img} alt="" />
      </div>
  )
}

export default Home3