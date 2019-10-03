const request = require('request');

const encodeURIComponent = (address) => {
    return address;
}

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidHVtbGl2ZWluIiwiYSI6ImNrMWExc29yaTB4YjgzbW4ycmM3dnpyZngifQ.jaDrQvaHZAXResYN_7Th2Q&limit=1`;

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name,
            });
        }
    });
};

module.exports = geocode;