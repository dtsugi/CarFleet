var querystring = require('querystring');
var Utils = require("./Utils");
var Connection = require('./Connection');

function Connect(request, response, connection) {
    console.log(connection);
    var sqlCall = "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_CATALOG ='" + connection.database + "' ORDER BY 1 ASC";
    Connection._CallQuery(connection, sqlCall, CallbackMainController, response);
}

function GetColumns(request, response, connection) {
    console.log(connection);
    var sqlCall = "SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_CATALOG ='" + connection.database + "' AND TABLE_NAME = '" + connection.tableName + "'";
    Connection._CallQuery(connection, sqlCall, CallbackMainController, response);
}

function GetKeysTable(request, response, data) {
    console.log(data);
    var sqlCall = "SELECT * FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE WHERE TABLE_NAME ='" + data.tableName + "'";
    Connection._CallQuery(data.connection, sqlCall, CallbackMainController, response);
}

function CallbackMainController(error, result, response) {
    console.log("CallbackMainController");
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.end(JSON.stringify({ error: error, result: result }));
}

function ProcessRequest(request, response, callback) {
    var body = "";
    if (request.method == "POST") {
        console.log("IS POST");
        request.on("data", function (data) {
            body += data;
        }).on("end", function () {
            callback(request, response, JSON.parse(body));
        });
    } else
        callback(request, response, null);
}

function DescribeRequest(request, response, callback) {
    console.log(request.body);
    //Utils.ViewPropertiesObject(request);
    var headers = request.headers;
    var method = request.method;
    var url = request.url;
    console.log("Headers:" + JSON.stringify(headers));
    console.log("Method:" + method);
    console.log("Url:" + url);
    var body = "";
    request.on("data", function (data) {
        body += data;
    }).on("end", function () {
        callback(request, response, JSON.parse(body));
    });
}

exports.Connect = Connect;
exports.GetColumns = GetColumns;
exports.ProcessRequest = ProcessRequest;
exports.GetKeysTable = GetKeysTable;

