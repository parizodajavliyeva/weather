import React from "react";

function ForecastItem({ data }) {
  
    let months=["January", "February" , "March" , "April" , "May" ,"June","July", "August" ,"September","October",  "November" , "December" ]
    let weekDays = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Sunday" , "Saturday"]
  const forecastItemData = {
    day:weekDays[(new Date(data?.dt*1000)).getDay()-1],
    date:new Date(data?.dt*1000).getDate(),
    deg:data?.main.temp,
    month:months[(new Date(data?.dt*1000)).getMonth()], 

  }
  
  return (
    <div>
      <li className="list-item">
        <img width={50}  src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} alt="" />
        <h3>{forecastItemData.deg}&deg;C</h3>
        <p>{forecastItemData.date} {(forecastItemData.month)} </p>
        <p>  {(forecastItemData.day)} </p>
      </li>
    </div>
  );
}

export default ForecastItem;
