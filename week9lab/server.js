const express = require('express');
const app = express();


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.post('/submit', (req, res) => {
    res.send({body: req.body});
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});