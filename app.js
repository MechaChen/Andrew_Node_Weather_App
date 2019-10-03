const request = require('request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const errorIcon = (text) => chalk.black.bgRed(` ${text} `);
const dataIcon = (text) => chalk.black.bgGreen(` ${text} `);

geocode('Taichung', (error, data) => {
    console.log(errorIcon('Error'), error);
    console.log(dataIcon('Data'), data);
});

// 
// Goal: Create a reusalbe function for getting the forecast 
// 
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecase function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecase string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log(errorIcon('Error'), error);
    console.log(dataIcon('Data'), data);
});
