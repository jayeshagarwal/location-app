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
        "x-rapidapi-key": "0d3883ce61msh33099b70a211636p177184jsn61c3afe16020"     
    });
     
    apiCall.end(function(result) {
        if (res.error) throw new Error(result.error);
        console.log(result.body);
        res.send(result.body); 
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))