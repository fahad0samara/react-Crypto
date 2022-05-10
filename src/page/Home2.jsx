import React from 'react'
import img from '../img/5.png'
const Home2 = () => {
  return (
      <div className=' grid md:grid-cols-2'>
          <img src={img} alt="" />
          <div className=' m-10 mt-28  space-y-3'>
              <h1 className=' text-3xl font-extrabold'>Advanced Trading <span className=' text-purple-600'>Tools</span> </h1>
              <div><h1 className=' text-2xl font-bold'>Professional Access, Non-stop Availability </h1>
                  <h2 >We provide premium access to crypto trading for both individuals and institutions through high liquidity, reliable order execution and constant uptime.</h2>
              </div>
             
              <div>
                  <h1 className=' text-2xl font-bold'>A Range of Powerful Apis</h1>
                  <h2>Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and HTTP APIs.Connect to our WebSocket for real-time data streaming,.</h2>
              </div>
              
              <div>
                  <h1 className=' text-2xl font-bold'>Customer Support </h1>
                  <h2>Premium 24/7 support available to all customers worldwide by phone or email.Dedicated account managers for partners..</h2>
              </div>
              <div>
                  <a
                      class="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                      href="#"
                  >
                      Get Started
                  </a>
                  <a
                      class="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold  hover:bg-gray-50 rounded-l-xl 
                                     border-purple-600 border-2
                                    rounded-t-xl transition duration-200"
                      href="#"
                  >
                      Learn More
                  </a>
              </div>
          </div>
         
      </div>
  )
}

export default Home2