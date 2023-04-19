//require('dotenv').config()

module.exports = {
    development: {
        url: 'postgres://ktjnojhh:WGgGoyfNGo6q8s9nQpxJVy4JMkiUDmMh@babar.db.elephantsql.com/ktjnojhh',
        dialect: 'postgres',
    },
    test: {
        url: process.env.TEST_DATABASE_URL,
        dialect: 'postgres',
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
}
