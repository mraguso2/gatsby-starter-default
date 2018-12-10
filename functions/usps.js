import fetch from 'node-fetch';
export async function handler(event, context) {
  try {
    console.log({env: process.env.GHNAME})
    const response = await fetch(`https://api.github.com/users/${process.env.GHNAME}`);
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ login: data.login, url: data.url })
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}