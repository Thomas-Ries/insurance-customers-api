/**
 * Imports
 */
const express = require('express');
const morgan = require ('morgan');
const favicon = require('serve-favicon');
const { success }= require('./helper');

let planets = require('./planets');
let universJson = require ('./univers');


/**
 * Variables
 */

const app  = express();
const port = 3000;

/**
 * Middlewares
 */

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'));

/**
 * Endpoints
 */

app.get('/', (req, res) => res.send('Bienvenue !'));

app.get('/api/univers', (req, res) => {
    const message  = "Entire Univers's Object";
    res.json(success(message, universJson));
});

app.get('/api/univers/:name', (req, res) => {
    const name = req.params.name;
    const univers = Array.isArray(universJson) ? universJson.find(univers => univers.name == name) : 0;
    const message  = `You selected ${name}`;
    res.json(success(message, univers));
});

// app.get('/api/planets/solar-system/:name', (req, res) => {
//     const name = req.params.name;
//     const planet = Array.isArray(planets) ? planets.find(planet => planet.name == name) : 0;
//     const message  = "Une planète à bien été trouvée.";
//     res.json(success(message, planet));
// })

/**
 * Listening
 */
app.listen(port, () => console.log(`app listening on : http://localhost:${port}`));