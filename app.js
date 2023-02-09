const express = require("express");
const { success }= require('./helper');
let planets = require("./planets");
let universJson = require ("./univers")

const app  = express();
const port = 3000;

app.get('/', (req, res) => res.send('Bienvenue !'));

// app.get('/api/planets/solar-system/:name', (req, res) => {
//     const name = req.params.name;
//     const planet = Array.isArray(planets) ? planets.find(planet => planet.name == name) : 0;
//     const message  = "Une planète à bien été trouvée.";
//     res.json(success(message, planet));
// })

app.get('/api/univers', (req, res) => {
    // const name = req.params.name;
    // const univers = Array.isArray(universJson) ? universJson.find(univers => univers.name == name) : 0;
    const message  = "Entire Univers's Object";
    res.json(success(message, universJson));
});

// app.get('/api/univers/:group/:name', (req, res) => {
//     const group = req.params.group;
//     const name = req.params.name;
//     const findGroup = Array.isArray(universJson) ? universJson.find(univers => univers.group == group) : 0;
//     const findName = Array.isArray(universJson) ? universJson.find(univers => univers.name == name) : 0;

//     const message  = "coucou";
//     res.json(success(message, findGroup));
// })



app.listen(port, () => console.log(`app démarrée sur : http://localhost:${port}`));