const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const errorIcon = (text) => chalk.black.bgRed(` ${text} `);
const dataIcon = (text) => chalk.black.bgGreen(` ${text} `);

geocode('Taichung', (error, data) => {
    if (error) {
        return console.log(errorIcon('Error'), error);
        
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(errorIcon('Error'), error);
        }

        console.log(dataIcon('Weather Report'));
        console.log(data.location);
        console.log(forecastData);
    });
});

