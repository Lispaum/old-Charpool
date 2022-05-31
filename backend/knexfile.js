// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: 
    {
        host: 'localhost',
        user: 'root',
        password: '1050729857aomttx#@!',
        database: 'charpool'
    },
    migrations:{
      directory: "./src/database/migrations"
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
