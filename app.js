const request = require('request');

const url = 'https://api.darksky.net/forecast/d4950cfcd7848f7f38a8e24385427d0e/37.8267,-122.4233';

request({ url }, (error, response) => {
    const data = JSON.parse(response.body);
    // console.log(data);
    console.log(data.currently);
});