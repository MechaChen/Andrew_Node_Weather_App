const request = require('request');

const url = 'https://api.darksky.net/forecast/d4950cfcd7848f7f38a8e24385427d0e/37.8267,-122.4233';

request({ url, json: true }, (error, response) => {
    const { temperature, precipProbability } = response.body.currently;
    console.log(`It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`);
});

// 
// Goal: Print a small forecast to the user
// 
// 1. Print: "It is currently 58.5 degrees out. There is a 0% chance of rain."
// 2. Test your work!
