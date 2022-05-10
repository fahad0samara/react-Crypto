import React from "react";
import img from "../img/3.png";
export const Home = () => {
  return (
    <section className="skewed-bottom-right ">
      <div className=" pt-12 lg:pt-20 pb-20 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
              <div className="w-full text-center lg:text-left">
                <div className="max-w-md mx-auto lg:mx-0">
                  <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                    <span> The World's Launch Fastest Growing</span>

                    <span className="text-purple-600"> Crypto Web App</span>
                  </h2>
                </div>
                <div data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom" className="max-w-sm mx-auto lg:mx-0">
                  <p className="mb-6  leading-loose">
                    Buy and sell 200+ cryptocurrencies with 20+ flat currencies
                    using bank transfers or your credit/debit card..
                  </p>
                  <div>
                    <a
                      className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                      href="#"
                    >
                      Get Started
                    </a>
                    <a
                      className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold  hover:bg-gray-50 rounded-l-xl 
                                     border-purple-600 border-2
                                    rounded-t-xl transition duration-200"
                      href="#"
                    >
                      Download App
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right"
              data-aos-anchor-placement="center-bottom" className="w-full lg:w-1/2 px-4 flex items-center justify-center">
              <div className="relative">
                <img
                  className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none"
                  src={img}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
