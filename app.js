const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const errorIcon = (text) => chalk.black.bgRed(` ${text} `);
const dataIcon = (text) => chalk.black.bgGreen(` ${text} `);

// 
// Goal: Accept location via command line argument
// 
// 1. Access the command line argument without yargs
// 2. Use the string value as the input for gecode
// 3. Only geocode if a locaiton was provided
// 4. Test your work with a couple locations

const address = process.argv[2];

if(!address) {
    console.log(errorIcon('Error'), 'Please enter a location.');
} else {
    geocode(address, (error, data) => {
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
}


