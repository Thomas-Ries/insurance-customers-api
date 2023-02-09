const express = require("express");
let planets = require("./planets");
let univers = require ("./univers")

const app  = express();
const port = 3000;

app.get('/', (req, res) => res.send('Bienvenue !'));

app.get('/api/planets/solar-system/:name', (req, res) => {
    const name = req.params.name;
    const planet = Array.isArray(planets) ? planets.find(planet => planet.name == name) : 0;
    res.send(`Vous avez demandé la planète ${planet.name}`);
})

app.get('/api/planets/solar-system', (req, res) => {
    res.send(`Il y a ${planets.length} planètes au sein de votre recherche`);
})



app.listen(port, () => console.log(`app démarrée sur : http://localhost:${port}`));