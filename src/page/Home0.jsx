import React from "react";
import img1 from "../img/1.png";
import axios from "axios";
import img from "../img/0.png";
const Home0 = () => {
    const currency = ["USD", "BTC", "ETH", "LTC", "ADA", "XRP"];
    const [currency1, setCurrency1] = React.useState("USD");
    const [currency2, setCurrency2] = React.useState("BTC");
    const [amount, setamount] = React.useState(0);
    const [exchange, setexchange] = React.useState(0);
    const [result, setresult] = React.useState(0);

    const convert = e => {
        e.preventDefault();
        const options = {
            method: "GET",
            url: "https://alpha-vantage.p.rapidapi.com/query",
            params: {
                to_currency: currency1,
                function: "CURRENCY_EXCHANGE_RATE",
                from_currency: currency2,
            },
            headers: {
                "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
                "X-RapidAPI-Key": "a36645c39cmsh442eca47f280340p14c14cjsnda822bd0f627",
            },
        };

        axios
            .request(options)
            .then(function (response) {
                //   console.log(response)
                // console.log(
                //   response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
                // );
                setexchange(
                    response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
                );
                setresult(
                    response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
                    amount
                );
            })
            .catch(function (error) {
                console.error(error);
            });

    };

    return (
        <div className=" grid md:grid-cols-4 ">

            <img data-aos="zoom-out-up" src={img} alt="" />

            <section className=" col-span-2">
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">

                    <div className="">

                        <div className="w-full max-w-lg mx-auto my-4 drop-shadow-2xl shadow-purple-600    shadow-xl rounded-3xl">
                            <section >

                                <div className="container items-center px-5 py-12 lg:px-20">
                                    <h1 className=" text-xl font-bold shadow-purple-600 shadow-lg">Exchange the currency you want</h1>

                                    <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform  rounded-lg md:mt-0">
                                        <div className="mt-8">

                                            <div className="mt-6">
                                                <form action="" className="space-y-6">
                                                    <div>
                                                        <label for="email" className="block  font-medium  text-2xl"> Exchange  from </label>
                                                        <div className="mt-1 flex">

                                                            <input type="number" className="block w-full px-5 py-3  
                                                            transition duration-500 ease-in-out transform
                                                            bg-transparent
                                                            border-b-4
                                                            focus:outline-none
                                                           border-purple-600
                                                             "
                                                                value={amount}
                                                                onChange={e => {
                                                                    setamount(e.target.value);
                                                                }}
                                                            />
                                                            <select
                                                                className="block   py-3 text-base  
                                                            transition duration-500 ease-in-out transform
                                                            bg-transparent
                                                            border-b-4 text-purple-500  border-purple-600"

                                                                onChange={e => { setCurrency1(e.target.value) }}
                                                                value={currency1}

                                                            >
                                                                {currency.map((currencymap, index) => (
                                                                    <option key={index}>{currencymap}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-1">
                                                        <label for="password" className="block font-medium  text-2xl"> to  </label>
                                                        <div className="mt-1 flex">

                                                            <input type="number" className="block w-full px-5 py-3  
                                                            transition duration-500 ease-in-out transform
                                                            bg-transparent
                                                            border-b-4
                                                            focus:outline-none
                                                           border-purple-600
                                                            cursor-not-allowed
                                                             "

                                                                value={result} disabled={true}
                                                            />
                                                            <select
                                                                className="block   py-3 text-base  
                                                            transition duration-500 ease-in-out transform
                                                            bg-transparent
                                                            border-b-4 text-purple-500  border-purple-600"

                                                                value={currency2}
                                                                onChange={e => {
                                                                    setCurrency2(e.target.value);
                                                                }}


                                                            >
                                                                {currency.map((currencymap, index) => (
                                                                    <option className=" bg-purple-600 text-blue-50" key={index}>{currencymap}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>



                                                    <div>
                                                        <button onClick={convert} className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform  bg-purple-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">convert</button>
                                                    </div>
                                                </form>


                                            </div>
                                        </div>

                                    </div>
                                    <div className=" text-center text-xl">

                                        <h1> exchange: {exchange}</h1>
                                        <p>{currency1} to {currency2}</p>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </section>
            <img data-aos="zoom-out-down" src={img1} alt="" />




        </div>
    );
};

export default Home0;
