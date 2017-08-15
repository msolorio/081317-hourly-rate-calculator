import React from 'react';

export default function Output(props) {
  return (
    <div className="numberInputGroup">
      <label htmlFor={props.id}>{props.label}</label>&nbsp;&nbsp;
      <output type="number" id={props.id}>
        {props.hourlyRate}
      </output>
    </div>
  )
}
