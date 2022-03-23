// import connection from "./connection";


// instanciate a new knex object with the connection requirements attached.
import knex from 'knex';
import { development } from '../knexfile.js';
const localKnex = knex(development);


export default class ArkhamControllers {

    constructor(){
    }


    static recallNodes (){
        return localKnex
            // Structured like a typical SQL query.
            .select('*')
            .from('nodes')
    }

    static recallLinks () {
        return localKnex 
            .select('source', 'target')
            .from('links')
    }


    static addNode (nameInput) {
        return localKnex
            .insert(
                { name : nameInput }
            )            
            .from('nodes');
    }

}

