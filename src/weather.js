import React from 'react';
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      zipcode:"",
      time:"",
      temprature:"",
      icon:"",
      description:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() { 
    return (
     
      <div className="App">
         <h1>What is the weather today?</h1>  
          <form onSubmit={this.handleSubmit}>
              <input placeholder = "Zipcode" onChange={this.handleChange}/>
              <button >Get weather</button>
              <p>{this.state.time}</p> 
              <p>{this.state.temprature}</p>
              <img src={"https://openweathermap.org/img/wn/"+ this.state.icon+".png"}/> 
              
              <p>{this.state.description}</p> 
          </form>
        </div>
      );
  }

  handleChange(e) {
    this.setState({zipcode: e.target.value });
  }
  async handleSubmit(e) {
    e.preventDefault();
    const zipcode = this.state.zipcode; 
    const weathereApikey="34c9a261402ccf438cebedb1dee0a341"
    const url = "http://api.openweathermap.org/data/2.5/weather?"+"zip="+zipcode+",us"+"&appid="+weathereApikey;
    const response =  await fetch(url)
    const result =  await response.json();
    this.setState({temprature:this.convertToFahranite (result.main.temp)+ " " +"\xB0F"})
    this.setState({description: result.weather[0].description })
    this.setState({icon:result.weather[0].icon })

    
    var lon = result.coord.lon;
    var lat = result.coord.lat;
    const timeApiKey="3HCA50JZWG8Q"
    var timeApi = "http://api.timezonedb.com/v2.1/get-time-zone?key="+timeApiKey+"&format=json&by=position&lat="+lat+"&lng="+lon
    const response2 =  await fetch(timeApi)
    const result2 =  await response2.json();
    this.setState({time: result2.formatted})

  }
  convertToFahranite(K){
    var F =(K - 273.15)* 1.8000 + 32.00
      return F.toPrecision(2)
  }
}


export default Weather;


     /* async getWeatherData (zipcode){
    var weathereApikey="34c9a261402ccf438cebedb1dee0a341"
    var timeApiKey="3HCA50JZWG8Q"
    var url = "http://api.openweathermap.org/data/2.5/weather?"+"zip="+zipcode+",us"+"&appid="+weathereApikey;
    //const url
    const response = await fetch(url)
    var data = await response.json();
    this.setState({ val3: data.weather[0].description })
  } */
    
    
    //var result = this.getWeatherData(zipcode)
    
    // $.get(weatherApi,function(result){ $("#icon").attr("src","http://openweathermap.org/img/wn/"+ result.weather[0].icon+".png")
      // <div>
      // <ol id="weatherid1" ></ol>
     
      // <ol id="weatherid2">(result.weather[0].description)</ol>
      // <ol id="weatherid3"></ol>
      // <ol id="weatherid4"></ol>
      // </div>
 //var s = "http://openweathermap.org/img/wn/"+ result.weather[0].icon+".png"
      //<img id= "icon" src=s/>
     // $("#icon").attr("src","http://openweathermap.org/img/wn/"+ result.weather[0].icon+".png")
      // var weather = (result.weather[0].description);
      // var temp = (convertToFahranite(result.main.temp));
      // var temp2 = ("Feels like "+" " +convertToFahranite(result.main.feels_like));
      // $("#weatherid4").text(weather) 
      // $("#weatherid2").text(temp+ " " +"\xB0F")
      // $("#weatherid3").text(temp2+ " " +"\xB0F")
      
      // var lon = result.coord.lon;
      // var lat = result.coord.lat;
      // var timeApi = "http://api.timezonedb.com/v2.1/get-time-zone?key="+timeApiKey+"&format=json&by=position&lat="+lat+"&lng="+lon
      // $.get(timeApi,function(result){
      //       $("#weatherid1").text("Time:"+moment(result.formatted).format('h:mm:ss a'));
      //   })
    // })
 



/* $(document).ready(
  function(){
  function convertToFahranite(K){
    var F =(K - 273.15)* 1.8000 + 32.00
      return F.toPrecision(2)
  }
  $("#zip").keyup(function(event){
    if(event.keyCode == 13){
      $("button#1").click();
    }         
  })
  $("button#1").click(function(){
    var zipcode = $("#zip").val(); 
    var weathereApikey="34c9a261402ccf438cebedb1dee0a341"
    var timeApiKey="3HCA50JZWG8Q"
    
    var weatherApi = "http://api.openweathermap.org/data/2.5/weather?"+"zip="+zipcode+",us"+"&appid="+weathereApikey;
    $.get(weatherApi,function(result){
      $("#icon").attr("src","http://openweathermap.org/img/wn/"+ result.weather[0].icon+".png")
      var weather = (result.weather[0].description);
      var temp = (convertToFahranite(result.main.temp));
      var temp2 = ("Feels like "+" " +convertToFahranite(result.main.feels_like));
      $("#weatherid4").text(weather) 
      $("#weatherid2").text(temp+ " " +"\xB0F")
      $("#weatherid3").text(temp2+ " " +"\xB0F")
      
      var lon = result.coord.lon;
      var lat = result.coord.lat;
      var timeApi = "http://api.timezonedb.com/v2.1/get-time-zone?key="+timeApiKey+"&format=json&by=position&lat="+lat+"&lng="+lon
      $.get(timeApi,function(result){
            $("#weatherid1").text("Time:"+moment(result.formatted).format('h:mm:ss a'));
        })
    })
  }) 
})

 */