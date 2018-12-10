import fetch from 'node-fetch';
const parseString = require('xml2js').parseString;
const {promisify} = require('es6-promisify');

export async function handler(event, context) {
  try {
    const zipcodeInput = event.queryStringParameters.zipcode

    if (!zipcodeInput) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: "No ZipCode" })
      }
    }

    const xml = `<CityStateLookupRequest USERID=${process.env.USPS_USERNAME}> <ZipCode ID="0"> <Zip5>${zipcodeInput}</Zip5></ZipCode></CityStateLookupRequest>`;
    const response = await fetch(`https://secure.shippingapis.com/ShippingAPI.dll?API=CityStateLookup&XML=${xml}`);

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }

    const responseXML = await response.text();

    const promiseParseString = promisify(parseString);

    const result = await promiseParseString(responseXML).then(data => JSON.stringify(data));

    return {
      statusCode: 200,
      body: result
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}