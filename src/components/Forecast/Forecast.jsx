import React from "react";
import ForecastItem from "../ForecastItem/ForecastItem";
function Forecast({forecast}) {
  return (
    <div className="second-side">
      <p className="title">5 days Forecast</p>
      <ul className="list">
        <ForecastItem data={forecast?.list[7]} />
        <ForecastItem data={forecast?.list[15]} />
        <ForecastItem data={forecast?.list[23]} />
        <ForecastItem data={forecast?.list[31]} />
        <ForecastItem data={forecast?.list[39]} />
      </ul>
    </div>
  );
}

export default Forecast;
