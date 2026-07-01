const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
})
app.get('/about', (req, res) => {
    res.send('Hello from the about page!');
})
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/profile.html'));
})
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
