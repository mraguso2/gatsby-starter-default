import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class SecondPage extends React.Component {
  wageRef = React.createRef();
  hoursRef = React.createRef();
  minutesRef = React.createRef();

  state = {
    total: 0,
    hide: true
  };

  round = (value, decimals) => {
    return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals).toFixed(decimals);
  }

  calculateValues = (e) => {
    e.preventDefault();
    const hourWage = parseFloat(this.wageRef.current.value) || 0;
    const hours = parseFloat(this.hoursRef.current.value) || 0;
    const minutes = parseFloat(this.minutesRef.current.value) || 0;

    const minuteWage = minutes === '' ? 0 : (hourWage / 60) * minutes;
    const total = this.round((hourWage * hours) + minuteWage, 2);
    return this.setState({total, hide: false});
  }

  handleChange = () => {
    this.setState({hide: true});
  }

  render() {
    const value = <p>{this.state.total}</p>

    return (
    <Layout>
      <Link to="/">Go back</Link>
      <div className="headerCas">
        <h3 id="headerCas--title">Math is Hard</h3>
      </div>
      <div className="inner">
        <h3 className="mainCas--title">Fill Out Some Details</h3>
        <form onSubmit={(e) => this.calculateValues(e)}>
          <label htmlFor="wage">Amount You Get Paid Per Hour:</label>
          <input className="numEntry" type="number" min="0" name="wage" onFocus={this.handleChange} ref={this.wageRef} id="wage"/>
          <label htmlFor="hours">Number of Hours Worked:</label>
          <input className="numEntry" type="number" min="0" name="hours" onFocus={this.handleChange} ref={this.hoursRef} id="hours"/>
          <label htmlFor="minutes">Number of Minutes Worked:</label>
          <input className="numEntry" type="number" min="0" name="minutes" onFocus={this.handleChange} ref={this.minutesRef} id="minutes"/>
          <button className="button" type="submit"><span role="img" aria-label="Money Bags">💰</span> Big Money Calculator <span role="img" aria-label="Money Bags">💰</span></button>
        </form>
        <div className={this.state.hide ? '' : "display"} id="calculated">
          {value}
        </div>
        <button onClick={this.testVar}>Oh Boy</button>
      </div>
    </Layout>
    )
  }
}

export default SecondPage
