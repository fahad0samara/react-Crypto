import React from 'react'
import img from '../img/11.png'
import { UilCommentVerify } from '@iconscout/react-unicons'
const Home1 = () => {
  return (
      <div className=' grid md:grid-cols-2 mt-10  '>
          <div data-aos="fade-up" className='  m-10 space-y-5   '>
              <h1 className=' text-4xl font-bold'>Introducing the <span className=' text-purple-600' >NEFA</span>  Credit Card</h1>
              <h2 className=' text-2xl'>Subject to cardholder and rewards terms which will be available at application</h2>
              <div className=' flex items-center text-center space-x-2'>
                  <span className=' bg-purple-600  rounded-full '><UilCommentVerify size='50' color='white'  /> </span>
                  <h1 className=' text-3xl font-bold'>Up to 3% back on purchases
                  </h1>
                 
              </div>
              <div className=' flex items-center text-center space-x-2'>
                  <span className=' bg-purple-600  rounded-full '><UilCommentVerify size='50' color='white' /> </span>
                  <h1 className=' text-3xl font-bold'> Earn rewards in bitcoin or any crypto on NEFA
                  </h1>

              </div>
              <div className=' flex items-center text-center space-x-2'>
                  <span className=' bg-purple-600  rounded-full '><UilCommentVerify size='50' color='white' /> </span>
                  <h1 className=' text-3xl font-bold'>No annual fee
                  </h1>

              </div>
              <div>
              
                  <a
                      class="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold  hover:bg-gray-50 rounded-l-xl 
                                     border-purple-600 border-2
                                 md:ml-32    rounded-t-xl transition duration-200"
                      href="#"
                  >
                      Join the waitlist
                  </a>
              </div>
          
          </div>
          <img  data-aos="fade-left" className='  mt-16 ' src={img} alt="" />
          
      </div>
  )
}

export default Home1