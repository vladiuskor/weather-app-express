const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=45d9771c39f6013087122f7569bde4a6&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude);

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error) {
            callback('Unable to  find location!', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degress out. The humidity is ' + body.current.humidity + '%.')
        }

    })
}


module.exports = forecast;