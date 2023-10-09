import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { NavLink } from "react-router-dom"; // or Link
import BG2 from "../assets/pexels-photo-531880.jpeg";

const LoadingPage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 10000);
  }, []);

  const getDataFromLS = localStorage.getItem("name");
  // console.log(getDataFromLS);

  return (
    <>
      <div id="loading_page_container">
        <img src={BG2} alt="BG not Found" id="loading_page_bi" />
        <div className="timer_with_btn">
          <CountdownCircleTimer
            isPlaying
            duration={10}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
          {
            show && (
              <div className="loading_page_display_data">
              <p className="loading_page_display_para">Click on 👉</p>
              <button className="loading_page_display_btn">
                <NavLink to="/greet">View</NavLink>
              </button>
              </div>
            )
          }
        </div>
        <h1 className="loading_page_username">
          Hi - "{getDataFromLS}" 😉 Thanks for Login..
        </h1>
      </div>
    </>
  );
};

export default LoadingPage;
