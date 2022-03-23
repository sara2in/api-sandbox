/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 const table = 'nodes';

 export async function seed(knex) {
   // Deletes ALL existing entries
   await knex(table).del()
   await knex(table).insert([
    { id: 1, name: "Bruh" }, 
    { id: 2, name: "Babe" }, 
    { id: 3, name: "Dude" }
   ]);
 }




