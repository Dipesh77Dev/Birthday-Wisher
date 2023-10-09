import React from 'react'

import data from './data.json';

import { useNavigate } from 'react-router-dom';

const BirthdayGreetings = () => {
  const navigate = useNavigate();

 let BirthdayData = data.birthdayData;

 const getDataFromLS = localStorage.getItem('name');
 console.log(getDataFromLS);

    // console.log(BirthdayData);
    
    const lg = () => {
      const deleteDataFromLS = localStorage.removeItem('name');
      alert(`You had been logout - ${getDataFromLS}, thanks for visiting, I hope you like the wishes from me... 😊`);
      navigate('/');
    };

    return ( 
        <>
      Hi - {getDataFromLS}
        <button onClick={lg}>Logout</button>
        </>
        )
}

export default BirthdayGreetings


/* 
{
  BirthdayData.map(
    (val) => {
      return
      (
        <div key="id">
          <h1>Name is - {val.name}</h1>
        </div>
      )
    }
  )
}
 */
