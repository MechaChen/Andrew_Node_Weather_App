const request = require('request');

const url = 'https://api.darksky.net/forecast/d4950cfcd7848f7f38a8e24385427d0e/37.8267,-122.4233?lang=ko&units=si';

request({ url, json: true }, (error, response) => {
    const { temperature, precipProbability } = response.body.currently;
    const { summary } = response.body.daily;
    console.log(`${summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`);
});

