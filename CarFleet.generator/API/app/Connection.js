"use strict";

var sql = require('mssql');
var LOGGER_TYPES = require('./constants/LOGGER_TYPES');

var config = {
    "server": "127.0.0.1"
    , "user": "usuario"
    , "password": "password"
    , "database": "baseDeDatos"
};

exports._CallQuery = function _CallQuery(connection, query, callback, response) {
    sql.connect(connection, function (error) {
        if (error) {
            TryCatchQuery(error, null, callback, response);
        }
        var request = new sql.Request();
        request.query(query, function (error, resultSet) {
            TryCatchQuery(error, resultSet, callback, response);
        });
    });
}

function TryCatchQuery(error, result, callback, response) {
    console.log("IN TryCatchQuery ");
    if (error) {
        console.log("ERROR IN TryCatchQuery %s", JSON.stringify(error));
        callback(true, null, response);
    } else {
        callback(false, result, response);
    }
}