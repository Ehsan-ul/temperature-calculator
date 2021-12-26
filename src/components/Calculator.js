import React from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVertict from './BoilingVerdict';
import { convert, toCelsius, toFahrenheit } from '../lib/convertor';

export default class Calculator extends React.Component {
  state = {
    temperature: '',
    scale: '',
  };

  handleChnage = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <h1>Temperature Calculator</h1>

        <TemperatureInput
          scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleChnage}
        />
        <br />
        <TemperatureInput
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={this.handleChnage}
        />
        <BoilingVertict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}
