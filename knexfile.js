// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 export const development = {
  client: 'postgres',
  connection: "postgres://postgres:docker@localhost:5432/arkham_db"
};
