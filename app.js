const request = require('request');

// const url = 'https://api.darksky.net/forecast/d4950cfcd7848f7f38a8e24385427d0e/37.8267,-122.4233?lang=ko&units=si';

// request({ url, json: true }, (error, response) => {
//     const { temperature, precipProbability } = response.body.currently;
//     const { summary } = response.body.daily;
//     console.log(`${summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`);
// });

// 
// Goal: Print the lat/long for Los Angeles
// 
// 1. Fire off a new request to the URLexplored in browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude longitude to the terminal
// 4. Test your work!
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHVtbGl2ZWluIiwiYSI6ImNrMWExc29yaTB4YjgzbW4ycmM3dnpyZngifQ.jaDrQvaHZAXResYN_7Th2Q&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
    const [ latitude, longitude ] = response.body.features[0].center;
    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);
});