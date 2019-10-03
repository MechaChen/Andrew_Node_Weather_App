const request = require('request');

// const url = 'https://api.darksky.net/forecast/d4950cfcd7848f7f38a8e24385427d0e/37.8267,-122.4233?lang=ko&units=si';

// request({ url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service');
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//     } else {
//         const { 
//             currently:  { temperature, precipProbability },
//             daily:      { summary },
//         } = response.body;
    
//         console.log(`${summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`);
//     }
// });

// 
// Goal: Handle errors for geocoding request
// 
// 1. Setup an error handler for low-level errors
// 2. Test by disableing network request and running the app
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/taichung.json?access_token=pk.eyJ1IjoidHVtbGl2ZWluIiwiYSI6ImNrMWExc29yaTB4YjgzbW4ycmM3dnpyZngifQ.jaDrQvaHZAXResYN_7Th2Q&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services');
    } else if (response.body.features.length === 0) {
        console.log('No Place Found!');
    } else {
        const [ latitude, longitude ] = response.body.features[0].center;
        console.log(latitude, longitude);
    }
});