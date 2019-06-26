const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// this data is from cityTemps_scaled and is only the 
app.get('/api/search/:sport/:month', (req, res) => {
    const sport = req.params.sport;
    const month = req.params.month;
    var coords = {
        sport: sport,
        month: month,
        locations: [
            {
                lat: 49.24966,
                lng: -123.119339,
                weight: 0.5
            }
        ]
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server running on port ${PORT}'));