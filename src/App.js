import React from 'react'
//import Form from './Components/Form'
//import Titles from './Components/Titles'
import Form from './Form'
import Titles from './Titles'
import Weather from './Weather'


class App extends React.Component{
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
      }

render(){
    this.getWeather=this.getWeather.bind(this)

return(
<div>

<h1>Hello there!</h1>
<Titles/>
<Form loadtWeather={this.getWeather} />
<Weather  temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />

</div>



)



}

getWeather = async (e) => {
const Api_Key='a8bd6f56e0c7055c333393779d370ddc'
const city = e.target.elements.city.value;

const country = e.target.elements.country.value;
const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
  
const response = await api_call.json();

    e.preventDefault();
    this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
}
}

export default App;
