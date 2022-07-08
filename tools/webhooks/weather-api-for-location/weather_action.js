/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
  
let rp = require('request-promise')
function main(params) {

    const options = {
        uri: "https://api.weather.com/v3/wx/forecast/daily/7day?geocode=" + params.geocode + "&format=json&units=m&language=en-US&apiKey=xxxxxxxxxxxxxxxxxxxxxxxx",
        json: true
    }
    
    return rp(options)
    .then(res => {
        return res
    })
}
