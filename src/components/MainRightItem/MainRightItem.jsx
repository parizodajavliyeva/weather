import React from 'react'

function MainRightItem({currentTime , currentTemp , currentIcon}) {
    let currentHour = new Date(currentTime * 1000).getHours()
  return (
      <div className="w">
            <p>{currentHour}</p>
            <img width={50} src={`https://openweathermap.org/img/wn/${currentIcon}@2x.png`} alt="" />
            <p>{currentTemp}C</p>
          </div>
  )
}

export default MainRightItem
