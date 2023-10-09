import React, { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import BI from "../assets/painting-mountain-lake-with-mountain-background_188544-9126.avif";

const HomePage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  // const [dataValid, setDataValid] = useState(false);

  const submitData = (e) => {
    e.prevent.default();
  };

  const change = () => {
    let nameCheck = name ? name : "Plz enter name";
    if (nameCheck == name) {
      alert(
        `Thz for filling & viewing this website - ${nameCheck}, please wait for 10 seconds, you will receive a button 💯💥`
      );
      navigate("/loading");
    } else {
      alert(`Please enter your name to go further...`);
      navigate("/");
    }
  };

  const storedDataInLS = localStorage.setItem("name", name);
  // console.log(storedDataInLS);

  return (
    <div id="home_page_container">
      <img src={BI} id="home_page_bi" alt="Background Image not found..."></img>
      <div className="home_page_form">
        <form onSubmit={submitData}>
          <input
            className="home_page_name-input"
            type="text"
            name="name"
            value={name}
            placeholder="Please enter your name"
            autoComplete="off"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <div>
            <button type="submit" onClick={change} className="home_page_btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;

/*
useEffect( () => {
  const storedData = localStorage.setItem('name', (name));
  console.log(storedData);
}, [name]);
*/
