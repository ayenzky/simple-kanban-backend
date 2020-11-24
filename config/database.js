module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        host: env("DATABASE_HOST", "localhost"),
        port: env("DATABASE_PORT", 1337),
        database: env("DATABASE_NAME", ""),
        username: env("DATABASE_USERNAME", ""),
        password: env("DATABASE_PASSWORD", ""),
        ssl: { "rejectUnauthorized": false }
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});


{
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "bookshelf",
      "settings": {
        "client": "postgres",
        "host": "${process.env.DATABASE_HOST}",
        "port": "${process.env.DATABASE_PORT}",
        "database": "${process.env.DATABASE_NAME}",
        "username": "${process.env.DATABASE_USERNAME}",
        "password": "${process.env.DATABASE_PASSWORD}",
        "ssl": { "rejectUnauthorized": false }
      },
      "options": {}
    }
  }
}


