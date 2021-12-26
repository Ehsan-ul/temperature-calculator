import React, { Component } from 'react';
import BoilingVertict from './BoilingVerdict';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

export default function TemperatureInput({
  temperature,
  scale,
  onTemperatureChange,
}) {
  return (
    <div>
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input
          type='number'
          value={temperature}
          onChange={(e) => onTemperatureChange(e, scale)}
        />
      </fieldset>
    </div>
  );
}
