import React from 'react'
//import Form from './Components/Form'
//import Titles from './Components/Titles'
import Form from './Form'
import Titles from './Titles'
import Weather from './Weather'


console.log("hello bboy")
const Api_Key='a8bd6f56e0c7055c333393779d370ddc'

class App extends React.Component{
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
      }
      
      getWeather = async (e) => {
        e.preventDefault();  

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        console.log("hello bboy")
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
        const response = await api_call.json();
        console.log("hello bboy")
        console.log(response);
        console.log("hello bboy")
        if(city && country){
          this.setState({
            temperature: response.main.temp,
            city: response.name,
            country: response.sys.country,
            humidity: response.main.humidity,
            description: response.weather[0].description,
            error: ""
          })
        }else{
          this.setState({
            error: "Please input search values..."
          })
        }
      }

render(){
    

return(
<div>

<h1>Hello there!</h1>
<Titles/>
<Form getWeather={this.getWeather} />
<Weather  temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />

</div>



)



}


}

export default App;
