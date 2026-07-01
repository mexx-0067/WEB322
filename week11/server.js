const express = require('express');
const path = require('path');
const app = express();
const clientSession = require('client-sessions');


const port = process.env.PORT || 8080;

const user = {
    username: 'user1',
    password: 'password123',
    email: 'user1@example.com'
}



app.use((req, res, next) => {
    app.locals.session = req.session;
    next();
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(clientSession({
    cookieName: 'session',
    secret: 'week12example-web322',
    duration: 2 * 60 * 1000,
    activeDuration: 1000 * 60,
}));

app.get('/', (req, res) => {
    res.redirect('/login'); 
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 