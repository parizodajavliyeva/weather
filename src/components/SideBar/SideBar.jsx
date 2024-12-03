import React from "react";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaCloudRain } from "react-icons/fa6";
import { IoWaterOutline } from "react-icons/io5";
import { FiSunrise } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import "./SideBar.css";
import Right from "../Rigth/Right";
import Forecast from "../Forecast/Forecast";
import MainRightItem from "../MainRightItem/MainRightItem";

function SideBar({currentWeather , forecast , airQuality}) {
  console.log(currentWeather);
  console.log(forecast?.list);
  

  let months=["January", "February" , "March" , "April" , "May" ,"June","July", "August" ,"September","October",  "November" , "December" ]
  let weekDays = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Sunday" , "Saturday"]

  console.log(months[(new Date(currentWeather?.dt*1000)).getMonth()]);

  const currentDate = {
    day:weekDays[(new Date(currentWeather?.dt*1000)).getDay()-1],
    date:new Date(currentWeather?.dt*1000).getDate(),
    year:new Date(currentWeather?.dt*1000).getFullYear(),
    month:months[(new Date(currentWeather?.dt*1000)).getMonth()], 

  }
  
  return (
    <div>
      <div className="hammasi">
        <div className="manaaa">
          <div className="b">




            <div className="bccolor">
              <p>Now</p>

              <div className="man">
                <span className="bignumber">{currentWeather?.main.temp}&deg;C</span>
                <img
                  src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>

              <p>{currentWeather?.weather[0].description}</p>
              <div className="line"></div>
              <div>
                <CiCalendar className="manaa" />
                {currentDate.day} ,  {currentDate.date} , {currentDate.month} ,{currentDate.year} 
              </div>
              <div>
                <CiLocationOn className="manaa" />
                {currentWeather?.name} , {currentWeather?.sys.country}
              </div>
            </div>



            <Forecast forecast={forecast}/>





          </div>
        </div>


        <Right forecast={forecast} currentWeather={currentWeather} airQuality={airQuality}/>

        
      </div>
      
    </div>
  );
}

export default SideBar;
