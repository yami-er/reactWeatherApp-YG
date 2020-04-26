import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      zipcode:"",
      time:"",
      temprature:"",
      icon:"",
      description:"",
      message:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({zipcode: e.target.value });
  }
  async handleSubmit(e) {
    e.preventDefault();
    const zipcode = this.state.zipcode; 
    if (zipcode.length===5 && isNaN(zipcode)===false ){
      this.setState({message:""})
      const weathereApikey="34c9a261402ccf438cebedb1dee0a341"
      const weatherApi = "http://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",us&appid="+weathereApikey+"&units=imperial";
      const response =  await fetch(weatherApi)
      const result =  await response.json();
      this.setState({
          temprature: result.main.temp+ " \xB0F",
          description: result.weather[0].description,
          icon:result.weather[0].icon})   
      const lon = result.coord.lon;
      const lat = result.coord.lat;
      const timeApiKey="3HCA50JZWG8Q"
      const timeApi = "http://api.timezonedb.com/v2.1/get-time-zone?key="+timeApiKey+"&format=json&by=position&lat="+lat+"&lng="+lon
      const response2 =  await fetch(timeApi)
      const result2 =  await response2.json();
      this.setState({time: result2.formatted})
    }
    else{
      this.setState(
        {
          zipcode:"",
          time:"",
          temprature:"",
          icon:"",
          description:"",
          message:"Please insert a correct zipcode"
        }
      )
     
    }
  }
  convertToFahranite(K){
    var F =(K - 273.15)* 1.8000 + 32.00
      return F.toPrecision(2)
  }
  render() { 
    return (
     
      <div className="weatherApp">
        <div className="title">
         <h1>What is the weather today?</h1>
         </div> 
         <div className="inputForm">
          <form onSubmit={this.handleSubmit}>
              <input placeholder = "Zipcode" onChange={this.handleChange}/>
              <button>Search</button>
              <p>{this.state.message}</p>
              <p>{this.state.time}</p> 
              <p>{this.state.temprature}</p>
              <img src={"https://openweathermap.org/img/wn/"+ this.state.icon+".png"} alt=''/> 
              <p>{this.state.description}</p>
          </form>
          </div> 
        </div>
      );
  }

  
}


export default Weather;


     