import React from 'react';
const Form = (props) => {
  return (
      <form onSubmit={this.props.loadWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Get Weather</button>
      </form>
  )
}
getWeather = async () => {

  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${Api_Key}`);
  
  const response = await api_call.json();
  
  console.log(response);
  
}

export default Form;