const express = require('express');

const app = express();

// app.get('/api/search:sport/:month', (req, res) => {

// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server running on port ${PORT}'));