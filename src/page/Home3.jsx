import React from 'react'
import img from '../img/6.png'

const Home3 = () => {
  return (
      <div className=' grid grid-cols-2  items-center  '>
          <img data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500" className='w-1/2 ml-52' src={img} alt="" />
          <img data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500" className='w-1/2 ml-32 hidden md:block'  src={img} alt="" />
      </div>
  )
}

export default Home3