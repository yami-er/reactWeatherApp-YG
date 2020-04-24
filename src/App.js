import React from 'react';
import Weather from './weather.js';
const api ={
  key:"681d208ef110da1a5d0eadffa5e29b55",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {
  const dateBuilder=(d)=>{
    let months = ["Januaary","February","March","April","May","June","Jyly","August","September","October","November","December"];
    let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month= months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="App">
      
      <main>
        <div className="search-box">
          <input 
          type= "text"
          className ="search-bar"
          placeholder="Search..."
          />
        </div>
        <div className= "location-box">
      <div className="location">New York City, US</div>
  <div className="date">{dateBuilder(new Date())}</div>
    </div>
    <div className= "Weather-box">
      < Weather />
    
    </div>
    </main>
    </div>
  );
}

export default App;
