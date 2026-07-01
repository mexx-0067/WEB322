const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML files from 'views'
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('express').render);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/about', (req, res) => {
    res.send('Hello from the about page!');
});
app.get('/profile', (req, res) => {
    res.send('Hello from the profile page!');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));