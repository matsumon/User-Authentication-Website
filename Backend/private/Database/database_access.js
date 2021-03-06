const support = require('../support.js');
const config = require('../../init_config.json');
var mysql = require('mysql2');

support.log("debug", "database_access.js - Configuring Database Connection object with values from config file");

const pool_config = {
    "connectionLimit": config.db_connectionLimit,
    "host": config.db_host,
    "user": config.db_serviceUser,
    "password": config.db_password,
    "database": config.db_rootDatabase,
    "multipleStatements": true
}

support.log("debug", "database_access.js - Establishing Connection to Database with configured arguments");

const pool = mysql.createPool(pool_config);
const promise_pool = pool.promise();

support.log("info", "database_access.js - Database Connection ESTABLISHED");

module.exports.pool = pool;
module.exports.promise_pool = promise_pool;