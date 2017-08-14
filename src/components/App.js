import React, { Component } from 'react';
import NumberInput from './NumberInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        from App component
        <NumberInput id="daily-earnings" label="Daily Earnings" />
        <NumberInput id="hours-per-day" label="Hours Per Day" />
        <NumberInput id="hourly-rate" label="Hourly Rate" />
      </div>
    );
  }
}

export default App;
