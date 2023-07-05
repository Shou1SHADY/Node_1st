const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();



const db_config = {
    // password: "27@866821ko",
    connectionString: process.env.DATABASE_URL,
    // all valid client config options are also valid here
    // in addition here are the pool specific configuration parameters:

    // number of milliseconds to wait before timing out when connecting a new client
    // by default this is 0 which means no timeout
    connectionTimeoutMillis: 300,

    // number of milliseconds a client must sit idle in the pool and not be checked out
    // before it is disconnected from the backend and discarded
    // default is 10000 (10 seconds) - set to 0 to disable auto-disconnection of idle clients
    idleTimeoutMillis: 200,

    // maximum number of clients the pool should contain
    // by default this is set to 10.
    max: 20,

}
const pool = new Pool(
    db_config
);

pool.on('connect', (client) => {
    //client.query('SET DATESTYLE = iso, mdy')

    console.log("database connection connect");
})


pool.on('remove', (client) => {


    console.log("database connection removed");
})
module.exports = pool; 