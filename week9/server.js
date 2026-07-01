const express = require('express');
const path = require('path');

const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const data = [{
        name: 'Sarah',
        age: 20,
        gpa: 4.00,
    },{
        name: 'Tom',
        age: 56,
        gpa: 3.7,
    },{
        name: 'John',
        age: 27,
        gpa: 3.5,
    }]
    // render the 'index' view and inject the data
    res.render('index', { message: 'Hello world', students: data });
});







app.listen(HTTP_PORT, () => {
    console.log(`Server is running on port ${HTTP_PORT}`);
});