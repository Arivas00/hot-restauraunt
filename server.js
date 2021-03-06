
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// Data

const tables = [
];

const waitlist = [

];


// Routes

app.get('/' , (req, res) => res.sendFile(path.join(__dirname, '/public/home.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '/public/tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, '/public/reserve.html')));

app.get('/api/tables', (req, res) => res.json(tables));

app.get('/api/waitlist', (req, res) => res.json(waitlist));


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));