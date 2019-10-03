const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const errorIcon = (text) => chalk.black.bgRed(` ${text} `);
const dataIcon = (text) => chalk.black.bgGreen(` ${text} `);

// 
// Goal: Use both destructuring and property shorthand in weather app
// 
// 1. Use destructuring in app.js, forecast.js, and geocode.js
// 2. Use property shorthand in forecase.js and geocode.js
// 3. Test your work and ensure app still works

const address = process.argv[2];

if(!address) {
    console.log(errorIcon('Error'), 'Please enter a location.');
} else {
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(errorIcon('Error'), error);
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(errorIcon('Error'), error);
            }
    
            console.log(dataIcon('Weather Report'));
            console.log(location);
            console.log(forecastData);
        });
    });
}


