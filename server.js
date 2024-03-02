const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

const port = process.env.PORT || 3000; // You can use environment variables for port configuration


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const homeRoute = require('./routes/home');

app.use('/home', homeRoute);

// run this command on the terminal or cmd inside project directory(folder) every time you make changes in code 
// node server.js 