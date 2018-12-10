import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class Autoform extends React.Component {
  zipcodeRef = React.createRef();
  cityRef = React.createRef();
  stateRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = () => {
    const zipcode = this.zipcodeRef.current.value

    if (zipcode.length < 5) {
      this.cityRef.current.value = '';
      this.stateRef.current.value = '';
      return;
    }
    return this.getCityAndState(zipcode);
  }

  getCityAndState = async (zip) => {
    const details = await fetch(`/.netlify/functions/usps?zipcode=${zip}`).then(res => res.json()).then(data => data);
    const { City: city, State: state } = details.CityStateLookupResponse.ZipCode[0];
    this.cityRef.current.value = city[0];
    this.stateRef.current.value = state[0];
    return;
  }

  render() {
    return (
    <Layout>
      <Link to="/">Go back</Link>
      <div className="inner">
        <h3 className="mainCas--title">Auto Populate City & State</h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="zipcode">ZipCode:</label>
          <input className="" type="text" maxLength="5" name="zipcode" onKeyUp={this.handleChange} ref={this.zipcodeRef} id="zipcode"/>
          <label htmlFor="city">City:</label>
          <input className="" type="text" name="city" ref={this.cityRef} id="city"/>
          <label htmlFor="state">State:</label>
          <input className="" type="text" name="state" ref={this.stateRef} id="state"/>
          {/* <button className="button" type="submit"><span role="img" aria-label="Money Bags">💰</span> Find my address <span role="img" aria-label="Money Bags">💰</span></button> */}
        </form>
      </div>
    </Layout>
    )
  }
}

export default Autoform