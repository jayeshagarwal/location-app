const express = require('express')
const unirest = require("unirest");
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    const apiCall = unirest(
        "GET",
        "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/"
    );
     
    apiCall.headers({
        "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
        "x-rapidapi-key": "*"     
    });
     
    apiCall.end(function(result) {
        if (res.error) throw new Error(result.error);
        console.log(result.body);
        res.send(result.body); 
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))