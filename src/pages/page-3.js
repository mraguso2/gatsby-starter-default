import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <Link to="/">Go back</Link>
    <div class="headerCas">
      <h3 id="headerCas--title">Math is Hard</h3>
    </div>
    <div class="inner">
      <h3 class="mainCas--title">Fill Out Some Details - NOT WORKING RIGHT NOW (fix by 11/17)</h3>
      <label for="wage">Amount You Get Paid Per Hour:</label>
      <input class="numEntry" type="number" min="0" name="wage" id="wage"/>
      <label for="hours">Number of Hours Worked:</label>
      <input class="numEntry" type="number" min="0" name="hours" id="hours"/>
      <label for="minutes">Number of Minutes Worked:</label>
      <input class="numEntry" type="number" min="0" name="minutes" id="minutes"/>
      <input class="button" id="calcButton" type="submit" value="💰 Big Money Calculator 💰"/>
      <div id="calculated"></div>
    </div>
  </Layout>
)

export default SecondPage
