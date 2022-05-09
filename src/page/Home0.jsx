import React from "react";
import img from "../img/4.png";
import axios from "axios";
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
    <div className=" grid grid-cols-3">
      <div className=" ">
        <h1>Exchange the currency you want</h1>
        <div className=" ">
                  <form action="" >
                      <select
                          onChange={e => { setCurrency1(e.target.value) }}
                          value={currency1}
                          name=""
                          class="form-select appearance-none
    "
                      >
                          {currency.map((currencymap, index) => (
                              <option key={index}>{currencymap}</option>
                          ))}
                      </select>
            <input
              type="number"
              value={amount}
              onChange={e => {
                setamount(e.target.value);
              }}
                      />
                      to
                      
            <input type="number" value={result} disabled={true} />
            <select
              name=""
              value={currency2}
              onChange={e => {
                setCurrency2(e.target.value);
              }}
            
              
            >
              {currency.map(currencymap => (
                <option >{currencymap}</option>
              ))}
            </select>
            <button onClick={convert}>convert</button>
          </form>
              </div>
              exchange: {exchange}
              <p>{currency1} to { currency2}</p>
      </div>
      <img className=" col-span-2 w-full" src={img} alt="" />
    </div>
  );
};

export default Home0;
