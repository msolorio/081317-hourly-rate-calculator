import React from 'react';

export default function NumberInput(props) {
  return (
    <div className="numberInputGroup">
      <label htmlFor={props.id}>{props.label}</label>&nbsp;&nbsp;
      <input
        type="number"
        id={props.id}
        value={props.value}
        onChange={(e) => props.onChange(parseInt(e.target.value))} />
    </div>
  );
}
