var _lblDatabaseId = "lblDatabase";
var _lblStpNameId = "lblStpName";
var _lblStpNameTwoId = "lblStpNameTwo";
var _divFieldsId = "divFields";
var _divInsertId = "divInsert";
var _divDeleteId = "divDelete";
var _divUpdateId = "divUpdate";
var _divSelectById = "divSelectById";
var _divSelectAllId = "divSelectAll";

function Init() {
    var connection, fieldsObject, stpName;
    fieldsObject = JSON.parse(_GetLocalStorage(_fieldsObject));
    connection = JSON.parse(_GetLocalStorage(_connectionObject));
    document.getElementById(_lblDatabaseId).innerHTML = connection.database;
    stpName = GetStpName(connection.tableName);
    document.getElementById(_lblStpNameId).innerHTML = document.getElementById(_lblStpNameTwoId).innerHTML = stpName;
    document.getElementById(_divFieldsId).innerHTML = LoadDivFields(fieldsObject);
    document.getElementById(_divInsertId).innerHTML = LoadDivInsert(connection.tableName, fieldsObject);
    document.getElementById(_divDeleteId).innerHTML = LoadDivDelete(connection.tableName, fieldsObject);
    document.getElementById(_divUpdateId).innerHTML = LoadDivUpdate(connection.tableName, fieldsObject);
    document.getElementById(_divSelectById).innerHTML = LoadDivSelectById(connection.tableName, fieldsObject);
    document.getElementById(_divSelectAllId).innerHTML = LoadDivSelectAll(connection.tableName);
}

function LoadDivFields(fields) {
    var text = "";
    for (i = 0; i < fields.length; i++) {
        text += "IN " + fields[i].STP_NAME + " " + fields[i].COLUMN_TYPE + ",<br>";
    }
    text += "IN OPERACION_OUT INT";
    return text;
}

function LoadDivInsert(tableName, fields) {
    var insert = "INSERT INTO " + tableName + "(";
    var values = "VALUES (";
    for (i = 0; i < fields.length; i++) {
        if (i == fields.length - 1) {
            insert += fields[i].COLUMN_NAME + ")";
            values += fields[i].STP_NAME + ")";
        }
        else {
            insert += fields[i].COLUMN_NAME + ",";
            values += fields[i].STP_NAME + ",";
        }
    }
    return insert + "<br>" + values + ";";
}

function LoadDivDelete(tableName, fields) {
    var text = "DELETE FROM " + tableName + "<br>WHERE ";
    return text + LoadWhere(fields) + ";";
}

function LoadDivUpdate(tableName, fields) {
    var text = "UPDATE " + tableName + "<br>SET ";
    text += LoadSet(fields);
    text += "<br>WHERE " + LoadWhere(fields);
    return text + ";";
}

function LoadDivSelectById(tableName, fields) {
    var text = "SELECT * FROM " + tableName + "<br>WHERE ";
    return text + LoadWhere(fields) + ";";
}

function LoadDivSelectAll(tableName) {
    return "SELECT * FROM " + tableName + ";";
}

function LoadWhere(fields) {
    var text = "";
    var existKey = false;
    for (i = 0; i < fields.length; i++) {
        if (fields[i].COLUMN_KEY) {
            if (!existKey) {
                text += fields[i].COLUMN_NAME + " = " + fields[i].STP_NAME;
                existKey = true;
            }
            else {
                text += "<br>AND " + fields[i].COLUMN_NAME + " = " + fields[i].STP_NAME;
            }
        }
    }
    return text;
}

function LoadSet(fields) {
    var text = "";
    for (i = 0; i < fields.length; i++) {
        if (i == fields.length - 1) {
            text += fields[i].COLUMN_NAME + " = " + fields[i].STP_NAME;
        }
        else {
            text += fields[i].COLUMN_NAME + " = " + fields[i].STP_NAME + ",<br>";
        }
    }
    return text;
}