/**
 * Imports
 */
const express = require('express');
const morgan = require ('morgan');
const favicon = require('serve-favicon');
const { success, getUniqueId }= require('./helper');

let customersApi = require("./customers.js");


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
 * Endpoints GET
 */

app.get('/', (req, res) => res.send('Bienvenue !'));

app.get('/api/customers', (req, res) => {
    const message  = "Entire customers's object";
    res.json(success(message, customersApi));
});

app.get('/api/customers/:name', (req, res) => {
    const name = req.params.name;
    const customers = Array.isArray(customersApi) ? customersApi.find(customers => customers.name == name) : 0;
    const message  = `You selected ${name}`;
    res.json(success(message, customers));
});

/**
 * Endpoints POST
 */

app.post('/api/customers', (req, res) => {
    const id = getUniqueId(customersApi);
    const customerCreated = {
        ...req.body,
        ...{
            id: id,
            created: new Date(),
        }
    };
    customer.push(customerCreated);
    const message = `Le client ${customerCreated.firstname} ${customerCreated.lastname} a bien été crée.`;
    res.json(success(message, customerCreated));
});

/**
 * Listening
 */
app.listen(port, () => console.log(`app listening on : http://localhost:${port}`));