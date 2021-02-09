var uniquecountries = require('unique-random-array');
var countries = require('./country.json');


module.exports = {
    all: countries,
    random: uniquecountries(countries)
};