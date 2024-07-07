import { useSelector } from "react-redux";
import { weatherImage } from "./Image";
import { motion } from "framer-motion";

import { CiTempHigh } from "react-icons/ci";
import { IoWaterOutline } from "react-icons/io5";
import { FiWind } from "react-icons/fi";

import Forecast from "./Forecast";
import Footer from "./Footer";

function City() {
  const state = useSelector((state: any) => state.weather);

  const currentDate = new Date();
  const dateString = currentDate.toDateString();

  let weatherImages: any;

  if (state.status === "succeeded") {
    if (state.data.list[0].weather[0].icon === "01d") {
      weatherImages = `${weatherImage[10].image}`;
    } else if (state.data.list[0].weather[0].icon === "02d") {
      weatherImages = `${weatherImage[8].image}`;
    } else if (state.data.list[0].weather[0].icon === "01n") {
      weatherImages = `${weatherImage[5].image}`;
    } else if (state.data.list[0].weather[0].icon === "11d") {
      weatherImages = `${weatherImage[11].image}`;
    } else if (state.data.list[0].weather[0].icon === "10d") {
      weatherImages = `${weatherImage[9].image}`;
    } else if (state.data.list[0].weather[0].icon === "09d") {
      weatherImages = `${weatherImage[6].image}`;
    } else if (state.data.list[0].weather[0].icon === "02n") {
      weatherImages = `${weatherImage[4].image}`;
    } else if (state.data.list[0].weather[0].icon === "04n") {
      weatherImages = `${weatherImage[3].image}`;
    } else if (state.data.list[0].weather[0].icon === "09n") {
      weatherImages = `${weatherImage[1].image}`;
    } else if (state.data.list[0].weather[0].icon === "03n") {
      weatherImages = `${weatherImage[7].image}`;
    } else if (state.data.list[0].weather[0].icon === "04d") {
      weatherImages = `${weatherImage[0].image}`;
    } else {
      weatherImages = `https://openweathermap.org/img/wn/${state.data.list[0].weather[0].icon}@2x.png`;
    }
  }

  return (
    <div className="mt-8">
      {state.status === "succeeded" ? (
        <div className="flex-col items-center justify-center text-center">
          <motion.div
            initial={{ x: -5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div>
              <h1 className="text-[1.6rem] font-medium text-white">
                {state.data.city.name} | {state.data.city.country}
              </h1>
            </div>
            <div>
              <p className="text-gray-300 font-extralight">{dateString}</p>
            </div>
            <div>
              <p className="text-sky-300 pt-4 text-[1.4rem]">
                {state.data.list[0].weather[0].description.charAt(0).toUpperCase() +
                  state.data.list[0].weather[0].description.slice(1)}
              </p>
            </div>
            <div className="flex items-center justify-center gap-16 pt-6 max-sm:gap-8">
              <div>
                {weatherImage ? (
                  <img src={weatherImages} width={100} height={100} />
                ) : (
                  <img
                    src={`https://openweathermap.org/img/wn/${state.data.list[0].weather[0].icon}@2x.png`}
                    width={100}
                    height={100}
                  />
                )}
              </div>

              <div>
                <p className="text-[2rem] text-white font-medium]">
                  {(state.data.list[0].main.temp - 273.15).toFixed(0)}&deg;
                </p>
              </div>
              <div className="text-white flex-col items-center justify-center">
                <div>
                  <p className="flex items-center">
                    <span className="text-gray-300">
                      <CiTempHigh className="text-[1.4rem]" />
                    </span>
                    Feels like: {(state.data.list[0].main.feels_like - 273.15).toFixed(0)} &deg;
                  </p>
                </div>
                <div>
                  <p className="flex items-center">
                    <span className="text-gray-300">
                      <IoWaterOutline className="text-[1.2rem]" />
                    </span>
                    Humidity: {state.data.list[0].main.humidity.toFixed(0)}%
                  </p>
                </div>
                <div>
                  <p className="flex items-center">
                    <span className="text-gray-300">
                      <FiWind className="text-[1.2rem]" />
                    </span>
                    Wind: {state.data.list[0].wind.speed.toFixed(0)} km/h
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex items-center justify-center">
            <div className="h-[7.8rem] mt-14 bg-white opacity-20 max-w-[35rem] w-[90%] rounded-xl"></div>
            <div className="absolute flex items-center justify-center">
              {state.data.list &&
                state.data.list.map((item: any) => (
                  <Forecast
                    key={item.dt}
                    date={item.dt_txt.slice(10, 16)}
                    temp={(item.main.temp - 273.15).toFixed(0)}
                    tempmin={(item.main.temp_min - 273.15).toFixed(0)}
                    weatherImgs={weatherImages}
                  />
                ))}
            </div>
          </div>

          <div>
            <Footer />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default City;
