const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// this data is from cityTemps_scaled and is only the data from May
app.get('/api/search/:sport/:month', (req, res) => {
    const sport = req.params.sport;
    const month = req.params.month;
    if (month <= 6) {
        var coords = {
            sport: sport,
            month: month,
            locations: [
                {
                    lat: 49.24966,
                    lng: -123.119339,
                    weight: 6
                },
                {
                    lat: 45.523449,
                    lng: -122.676208,
                    weight: 3
                },
                {
                    lat: 37.774929,
                    lng: -122.419418,
                    weight: 8
                },
                {
                    lat: 47.606209,
                    lng: -122.332069,
                    weight: 3
                }
            ]
        }
    } else {
        var coords = {
            sport: sport,
            month: month,
            locations: [
                {
                    lat: 39.952339,
                    lng: -75.163788,
                    weight: 3
                },
                {
                    lat: 40.714272,
                    lng: -74.005966,
                    weight: 5
                },
                {
                    lat: 45.508839,
                    lng: -73.587807,
                    weight: 6
                },
                {
                    lat: 42.358429,
                    lng: -71.059769,
                    weight: 3
                }
            ]
        }
    }
    // res = coords;
    return res.json(coords);
});

app.listen(5000, () => {
    console.log("running");
});