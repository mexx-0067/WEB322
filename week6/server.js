const express = require('express');
const path = require('path');
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/profile.html'));
});

app.listen(HTTP_PORT, () => {
    console.log('Server is running on port ', HTTP_PORT);
});