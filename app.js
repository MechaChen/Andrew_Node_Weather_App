const request = require('request');

const url = 'https://api.darksky.net/forecast/d4950cfcd7848f7f38a8e24385427d0e/37.8267,-122.4233';

request({ url, json: true }, (error, response) => {
    console.log(response.body.currently);
});