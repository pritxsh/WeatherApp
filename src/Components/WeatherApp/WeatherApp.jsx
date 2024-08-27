import React, { useEffect, useState } from 'react'
import "../WeatherApp/WeatherStyle.css"
import Search from '../Search/Search'
import { FaCloud,FaDroplet,FaGaugeSimpleHigh } from "react-icons/fa6";

const WeatherApp = () => {
   const[weatherData,setWeatherData] = useState(null)
   const[search,setSearch] = useState("")

   useEffect(()=>{
    fetchData("Pune")
   },[])

   const fetchData = async (city)=>{
    try{
       const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=da05d274aebdf8921b27b81434d6cc29`)

       const jsonData = await data.json()
       if(jsonData){
               setWeatherData(jsonData)
              //  console.log(jsonData);
               
       }
   }
      catch(e){
     console.log(e);
      }

    }
    const handleSearch = async ()=>{
      fetchData(search)
      setSearch("")
     }
      
  return (
    <>
     <div className="main">
        <div className="weathercard">
           <Search search = {search} setSearch={setSearch} handleSearch ={handleSearch}/>
        {
          weatherData?.cod !== 200 ? (
            <div className="error">Oops! City not found</div>
          ) : 
         ( <>
           <div className="citycard">
            <span id='cityname'>{weatherData?.name}</span>
            <img id='flag' src={`https://flagsapi.com/${weatherData?.sys?.country}/flat/64.png`} alt="img" />
           </div>
           <div className="weathercontent">
            <img src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png`} alt="img" />
            <span id='temp'>{weatherData?.main?.temp}
            <sup>o</sup>
            </span>
            <span id='desc'>{weatherData?.weather[0]?.description}</span>
           </div>
           <div className="weatherdata">
            <ul>
                <li>
                  <span>Clouds</span>
                  <span className="icons">
                  <FaCloud size={30}/>
                  </span>
                  <span>{weatherData?.clouds?.all}%</span>
                </li>
                <li>
                  <span>Humidity</span>
                  <span>
                     <FaDroplet size={30}/>
                  </span>
                  <span>{weatherData?.main?.humidity}%</span>
                </li>
                <li>
                  <span>Pressure</span>
                  <span><FaGaugeSimpleHigh size={30}/></span>
                  <span>{weatherData?.main?.pressure}hPa</span>
                </li>
            </ul>
           </div>
          </>
          )}
        </div>
     </div>
    </>
  )
}

export default WeatherApp