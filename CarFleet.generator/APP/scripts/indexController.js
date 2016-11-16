var _cboTableId = "cboTables";
var _cboColumnsId = "cboTables";
var _divInfoColumnsId = "divInfoColumns";
var _fieldListClassName = "_fieldList";

function Connect(isNew) {
    var connection, data, isValid = false;
    httpRequest = new XMLHttpRequest();
    if (isNew) {
        connection = {
            server: GetValueElement("txtHost"),
            user: GetValueElement("txtUser"),
            password: GetValueElement("txtPassword"),
            database: GetValueElement("txtDatabase"),
            options: { encrypt: true }
        };
        data = JSON.stringify(connection);
        _SetLocalStorage(_connectionObject, data);
        isValid = true;
    }
    else {
        connection = _GetLocalStorage(_connectionObject);
        if (connection) {
            data = connection;
            isValid = true;
        }
        else {
            SeeIndex();
        }
    }
    if (isValid) {
        httpRequest.open('POST', url + '/User?op=Connect', true);
        httpRequest.onreadystatechange = _callbackConnect;
        httpRequest.send(data);
    }
}

function _callbackConnect() {
    var connection, result, cboTable;
    if (ValidateResponse(this)) {
        console.log("FINISHED _callbackConnect");
        result = JSON.parse(this.response);
        console.log(result);
        if (result.error) {
            console.log("ERROR en el result del _callbackConnect");
        } else {
            document.getElementById("divLogin").style.display = "none";
            document.getElementById("divMain").style.display = "block";
            SetLabelTextElement("lblConnectionString", _GetLocalStorage(_connectionObject));
            cboTable = document.getElementById(_cboTableId);
            RemoveChildsCombo(cboTable);
            for (row in result.result) {
                var optionElement = document.createElement("option");
                optionElement.value = optionElement.innerHTML = result.result[row].TABLE_NAME;
                cboTable.appendChild(optionElement)
            }
        }
    }
}

function GetKeysTable() {
    var connection, data, cboTable, tableName;
    connection = JSON.parse(_GetLocalStorage(_connectionObject));
    if (connection) {
        cboTable = document.getElementById(_cboTableId);
        tableName = cboTable.options[cboTable.selectedIndex].value;
        connection.tableName = tableName;
        _SetLocalStorage(_connectionObject, JSON.stringify(connection));
        httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', url + '/User?op=GetKeysTable', true);
        httpRequest.onreadystatechange = _callbackGetKeysTable;
        data = { connection: connection, tableName: tableName };
        httpRequest.send(JSON.stringify(data));
    } else {
        SeeIndex();
    }
}

function _callbackGetKeysTable() {
    var result;
    if (ValidateResponse(this)) {
        console.log(this.response);
        console.log("FINISHED _callbackGetKeysTable");
        result = JSON.parse(this.response);
        console.log(result);
        if (result.error) {
            console.log("ERROR en el result del _callbackGetKeysTable");
        } else {
            _SetLocalStorage(_keysTableObject, JSON.stringify(result.result));
            SetLabelTextElement("lblKeysTable", _GetLocalStorage(_keysTableObject));
            GetColumns();
        }
    }
}

function GetColumns() {
    var connection = JSON.parse(_GetLocalStorage(_connectionObject));
    if (connection) {
        httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', url + '/User?op=GetColumns', true);
        httpRequest.onreadystatechange = _callbackGetColumns;
        httpRequest.send(JSON.stringify(connection));
    } else {
        SeeIndex();
    }
}

function _callbackGetColumns() {
    var result, divInfoElement, inputElement;
    if (ValidateResponse(this)) {
        console.log(this.response);
        console.log("FINISHED _callbackGetColumns");
        result = JSON.parse(this.response);
        console.log(result);
        if (result.error) {
            console.log("ERROR en el result del _callbackGetColumns");
        } else {
            divInfoElement = document.getElementById(_divInfoColumnsId);
            divInfoElement.innerHTML = "";
            for (index in result.result) {
                var valueJSON = {
                    COLUMN_NAME: result.result[index].COLUMN_NAME,
                    IS_NULLABLE: result.result[index].IS_NULLABLE,
                    DATA_TYPE: result.result[index].DATA_TYPE,
                    COLUMN_TYPE: result.result[index].COLUMN_TYPE,
                    COLUMN_KEY: result.result[index].COLUMN_KEY,
                    CHARACTER_MAXIMUM_LENGTH: result.result[index].CHARACTER_MAXIMUM_LENGTH,
                    NUMERIC_PRECISION: result.result[index].NUMERIC_PRECISION,
                    STP_NAME: EvalStpName(result.result[index].COLUMN_NAME),
                    ENTITY_NAME: EvalEntityName(result.result[index].COLUMN_NAME)
                }
                inputElement = document.createElement("input");
                inputElement.type = "text";
                inputElement.id = "_txt" + valueJSON.COLUMN_NAME;
                inputElement.className = _fieldListClassName;
                inputElement.value = JSON.stringify(valueJSON);
                divInfoElement.appendChild(inputElement);
            }
            inputElement = document.createElement("input");
            inputElement.type = "submit";
            inputElement.value = "Generate";
            inputElement.onclick = Generate;
            divInfoElement.appendChild(inputElement);
        }
    }
}

function Generate() {
    var fieldElements, fieldList = new Array();
    fieldElements = document.getElementsByClassName(_fieldListClassName);
    for (i = 0; i < fieldElements.length; i++) {
        // fieldList.push(fieldElements[i].value);
        fieldList.push(JSON.parse(fieldElements[i].value));
    }
    _SetLocalStorage(_fieldsObject, JSON.stringify(fieldList));
    window.open(_urlEntityTemplate);
    window.open(_urlCrudTemplate);
    window.open(_urlStoreProcedureTemplate);
    // window.open(_urlRuleTemplate);
}

function SeeIndex() {
    document.getElementById("divLogin").style.display = "block";
    document.getElementById("divMain").style.display = "none";
}

function ValidateResponse(request) {
    if (request.readyState == 4 && request.status == 200) {
        return true;
    }
    else {
        return false;
    }
}

function RemoveChildsCombo(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function EvalStpName(field) {
    var newField = "", ascii;
    for (i = 0; i < field.length; i++) {
        if (i == 0) {
            newField += field[i].toUpperCase();
        } else {
            ascii = field.charCodeAt(i);
            if (ascii >= 97 && ascii <= 122) {
                newField += field[i].toUpperCase();
            }
            else {
                newField += "_" + field[i];
            }
        }
    }
    newField += "_OUT";
    return newField;
}

function EvalEntityName(field) {
    var newField = "", ascii;
    for (i = 0; i < field.length; i++) {
        if (i == 0) {
            newField += field[i].toUpperCase();
        } else {
            newField += field[i];
        }
    }
    return newField;
}