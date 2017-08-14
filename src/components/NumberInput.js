import React from 'react';

export default function NumberInput(props) {
  return (
    <div className="numberInputGroup">
      <label for={props.id} >{props.label}</label>&nbsp;&nbsp;
      <input type="number" id={props.id} />
    </div>
  );
}
