require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 9000;

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/musicsearch/:query', (req, res) => {
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${req.params.query}`, {
        "method": "get",
        "headers": {
            "Content-Type": "application/json",
            "x-rapidapi-host": process.env.RAPID_API_HOST,
            "x-rapidapi-key": process.env.RAPID_API_KEY
        }
    })
        .then((response) => {
            return response.json();
        })
        .then((resp) => {
            console.log(resp.data);
            res.json(resp.data);
        })
        .catch(err => {
            res.send(`Error: ${err}`);
        });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});