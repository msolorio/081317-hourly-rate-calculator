import React, { Component } from 'react';
import NumberInput from './NumberInput';
import Output from './Output';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dailyEarnings: 360,
      hoursPerDay: 8,
      hourlyRate: 0
    }
  }

  changeInput(stateProp, inputVal) {
    this.setState((prevState) => ({
      [stateProp]: inputVal
      // hourlyRate: this.state.dailyEarnings / this.state.hoursPerDay
    }));
  }

  calcHourlyRate(dailyEarnings, hoursPerDay) {
    return dailyEarnings / hoursPerDay;
  }

  render() {

    const hourlyRate = (this.calcHourlyRate(this.state.dailyEarnings, this.state.hoursPerDay)).toFixed(2);

    return (
      <div className="App">
        <h2 className="headline">Hourly Rate Calculator</h2>
        <NumberInput
          id="daily-earnings"
          label="Daily Earnings"
          value={this.state.dailyEarnings}
          onChange={(dailyEarnings) => this.changeInput('dailyEarnings', dailyEarnings)} />

        <NumberInput
          id="hours-per-day"
          label="Hours Per Day"
          value={this.state.hoursPerDay}
          onChange={(hoursPerDay) => this.changeInput('hoursPerDay', hoursPerDay)} />

        <Output
          id="hourly-rate"
          label="Hourly Rate"
          hourlyRate={hourlyRate} />
      </div>
    );
  }
}

export default App;
