const express = require('express');
const axios = require('axios');
const request = require('request');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

const $ = jQuery = require('jquery')(window);

const app = express();

app.use(express.static('dist'));

app.get('/test', (req, res) => {

});



module.exports = app;
