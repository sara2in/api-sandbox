const knex = require('knex');
const knexConfig = require('../knexfile');
const environment = process.env.DB_ENV || 'development';

export default function localKnex(){
    return knex(knexConfig[environment]);
}

