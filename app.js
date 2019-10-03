const request = require('request');

const url = 'https://api.darksky.net/forecast/d4950cfcd7848f7f38a8e24385427d0e/37.8267';

request({ url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service');
    } else if (response.body.error) {
        console.log('Unable to find location');
    } else {
        const { 
            currently:  { temperature, precipProbability },
            daily:      { summary },
        } = response.body;
    
        console.log(`${summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`);
    }
});

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHVtbGl2ZWluIiwiYSI6ImNrMWExc29yaTB4YjgzbW4ycmM3dnpyZngifQ.jaDrQvaHZAXResYN_7Th2Q&limit=1';

// request({ url: geocodeURL, json: true }, (error, response) => {
//     const [ latitude, longitude ] = response.body.features[0].center;
//     console.log(`Latitude: ${latitude}`);
//     console.log(`Longitude: ${longitude}`);
// });