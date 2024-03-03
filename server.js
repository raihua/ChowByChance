const express = require('express');
const { fetchPlacesData } = require('./googlePlacesController');
const app = express();

const port = process.env.PORT || 5000;

app.get('/places', fetchPlacesData);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const indexRoute = require('./routes/index');

app.use('/', indexRoute);
