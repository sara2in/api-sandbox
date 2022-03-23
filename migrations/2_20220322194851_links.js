/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up (knex){
    return knex.schema.createTable('links', (table) => {
        // id
        table.increments('id').notNullable();
        // title
        // table.string('workspace_id').references('id').inTable('workspace').notNullable().onDelete('cascade');
        // edges
        table.integer('source');
        table.integer('target');
        
        // table.string('source').references('id').inTable('nodes').notNullable().onDelete('cascade');
        // table.string('target').references('id').inTable('nodes').notNullable().onDelete('cascade');
        // // creation & update
        // table.timestamps(true, true);
      });
}


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down (knex){
    return knex.schema.dropTableIfExists('links');
}
