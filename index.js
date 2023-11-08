const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './')));

app.post('/contact_form', (req, res) => {
    const formData = req.body;
    console.log('Form data received in JSON format:', formData);
    res.redirect('index.html');
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
