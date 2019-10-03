const request = require('request');

const forecast = (lat, lng, callback) => {
    const url = `https://api.darksky.net/forecast/d4950cfcd7848f7f38a8e24385427d0e/${lat},${lng}`;

    request({ url, json: true }, (error, { body : data }) => {
        if (error) {
            callback('Unable to connect to the services.', undefined);
        } else if (data.error) {
            callback('Unable to get the location.', undefined);
        } else {
            const { temperature, precipProbability } = data.currently;
            const { summary } = data.daily;
        
            callback(undefined, `${summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`);
        }
    });
};

module.exports = forecast;