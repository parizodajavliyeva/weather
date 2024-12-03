import React from "react";
import { IoWaterOutline } from "react-icons/io5";
import { FiSunrise } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import RightItem from "../RightItem/RightItem";
import { CiCloudOn } from "react-icons/ci";
import MainRight from "../MainRight/MainRight";
import MainRightItem from "../MainRightItem/MainRightItem";

function Right({ airQuality, currentWeather , forecast }) {
  console.log(currentWeather);
console.log(airQuality);

  let todayAt = forecast?.list.slice(0, 8);
console.log(todayAt);

  let sunsetHour = new Date(currentWeather?.sys.sunset * 1000).getHours();
  let sunsetHourReal = sunsetHour > 12 ? sunsetHour - 12 : sunsetHour;

  let sunsetMinutes = new Date(currentWeather?.sys.sunset * 1000).getMinutes();
  let isAMorPM = sunsetHour > 12 ? "PM" : "AM";

  let sunriseTime = `${new Date(
    currentWeather?.sys.sunrise * 1000
  ).getHours()}  :
    ${new Date(currentWeather?.sys.sunrise * 1000).getMinutes()}`;

  let sunsetTime = `${sunsetHourReal}  :
    ${sunsetMinutes} ${isAMorPM}`;

  return (
    <div>
      <h2>Today's Highlights</h2>

      <div className="poor">
        <div className="esh">
          <p>Air Quality Index</p>
          <button className="btn">Very Poor</button>
        </div>
      </div>

      <div className="divcha">
        <div>
          <ul className="listss">
            <img width={100} src={"w.webp"} alt="" />
            <RightItem
              airType={"CO"}
              airData={airQuality?.list[0].components.co}
            />
            <RightItem
              airType={"NH3"}
              airData={airQuality?.list[0].components.co}
            />
            <RightItem
              airType={"NO"}
              airData={airQuality?.list[0].components.co}
            />
            <RightItem
              airType={"03"}
              airData={airQuality?.list[0].components.co}
            />
            <RightItem
              airType={"PM2"}
              airData={airQuality?.list[0].components.co}
            />
            <RightItem
              airType={"PM10"}
              airData={airQuality?.list[0].components.co}
            />
            <RightItem
              airType={"SO"}
              airData={airQuality?.list[0].components.co}
            />
            
          </ul>
        </div>

        <div className="divchaa">
          <div className="c">
            <p>Sunrise & Sunset</p>

            <div className="vkjdsbv">
              <div className="display">
                <div>
                  <p className="width">
                    <FiSunrise />.
                  </p>
                </div>
                <div>
                  <p>Sunrise</p>
                  <p className="kla">{sunriseTime}</p>
                </div>
              </div>

              <div className="display">
                <div>
                  <p className="width">
                    <FiSunrise />.
                  </p>
                </div>
                <div>
                  <p>Sunrise</p>
                  <p className="kla">{sunsetTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d">
        <div className="k">
          <div className="div">
            <p>Feels like</p>

            <p className="picha">
              {" "}
              <IoWaterOutline className="icon" />{" "}
              {currentWeather?.main.feels_like}
            </p>
          </div>
          <div className="div">
            <p>Level GRND</p>

            <p className="picha">
              {" "}
              <IoWaterOutline className="icon" />{" "}
              {currentWeather?.main.grnd_level}
            </p>
          </div>
          <div className="div">
            <p>Humidity</p>

            <p className="picha">
              {" "}
              <IoWaterOutline className="icon" />{" "}
              {currentWeather?.main.humidity}
            </p>
          </div>
          <div className="div">
            <p>Pressure</p>

            <p className="picha">
              {" "}
              <IoWaterOutline className="icon" />{" "}
              {currentWeather?.main.pressure}
            </p>
          </div>

          {/* <div className="div divv">
            Humidity
            <div className="m">
              <FaEye />
              <p>{currentWeather?.main.humidity}</p>
            </div>
          </div>
          <div className="div divv">
            Pressure
            <div className="m">
              <FaEye />
              <p>{currentWeather?.main.pressure}</p>
            </div>
          </div> */}
        </div>

        <br />
        <div className="div">
          <p>Temp</p>

          <p className="picha">
            {" "}
            <IoWaterOutline className="icon" /> {currentWeather?.main.temp}
          </p>
        </div>

      </div>
      <div className="t">
        <h3>Today at</h3>
        <div className="pp">
          {
            todayAt?.map((el)=> <MainRightItem currentTime={el.dt} currentIcon={el.weather[0].icon} currentTemp={el.main.temp} /> )
          }
        </div>
      </div>
    </div>
  );
}

export default Right;
