var _lblTableName = "lblTableName";
var _divParametersFullOutput = "divParametersFullOutput";
var _divFieldsTableName = "divFieldsTableName";
var _divFieldsInsertValues = "divFieldsInsertValues";
var _divParametersSelectOutput = "divParametersSelectOutput";
var _divSelectWhere = "divSelectWhere";
var _divUpdateSet = "divUpdateSet";
var _divWhereKeys = "divWhereKeys";

function Init() {
    var connection, fieldsObject, keysTableObject;
    fieldsObject = JSON.parse(_GetLocalStorage(_fieldsObject));
    keysTableObject = JSON.parse(_GetLocalStorage(_keysTableObject));
    fieldsObject = SetKeys(fieldsObject, keysTableObject);
    connection = JSON.parse(_GetLocalStorage(_connectionObject));
    SetTextElementByName(_lblTableName, connection.tableName);
    LoadDivParametersFull(fieldsObject);
}

function LoadDivParametersFull(fields) {
    var outputParameters = "", fieldstable = "", valuesParameters = "", parametersSelectOutput = "", selectWhere = "", updateSet = "", whereKeys = "";
    for (i = 0; i < fields.length; i++) {
        if (IsVarcharType(fields[i].DATA_TYPE)) {
            outputParameters += "@" + fields[i].STP_NAME + "  " + fields[i].DATA_TYPE.toUpperCase() + "(" + fields[i].CHARACTER_MAXIMUM_LENGTH + ")";
            if (fields[i].IS_KEY) {
                parametersSelectOutput += "@" + fields[i].STP_NAME + "  " + fields[i].DATA_TYPE.toUpperCase() + "(" + fields[i].CHARACTER_MAXIMUM_LENGTH + ") <br>";
            }

        }
        else {
            outputParameters += "@" + fields[i].STP_NAME + "  " + fields[i].DATA_TYPE.toUpperCase();
            if (fields[i].IS_KEY) {
                parametersSelectOutput += "@" + fields[i].STP_NAME + "  " + fields[i].DATA_TYPE.toUpperCase() + "<br>";
            }
        }
        fieldstable += fields[i].COLUMN_NAME;
        valuesParameters += "@" + fields[i].STP_NAME;
        if (fields[i].IS_KEY) {
            selectWhere += "(" + fields[i].COLUMN_NAME + "= @" + fields[i].STP_NAME + " OR @" + fields[i].STP_NAME + " IS NULL ) <br>";
            whereKeys += fields[i].COLUMN_NAME + "= @" + fields[i].STP_NAME + " AND <br>";
        }
        else {
            updateSet += fields[i].COLUMN_NAME + "= @" + fields[i].STP_NAME + ",<br>";
        }
        if (i < (fields.length - 1)) {
            outputParameters += ",<br>";
            fieldstable += ",";
            valuesParameters += ",";
        }
    }

    SetTextElementByName(_divParametersFullOutput, outputParameters);
    SetTextElementByName(_divFieldsTableName, fieldstable);
    document.getElementById(_divFieldsInsertValues).innerHTML = valuesParameters;
    SetTextElementByName(_divParametersSelectOutput,parametersSelectOutput);
    SetTextElementByName(_divSelectWhere,selectWhere);         
    document.getElementById(_divUpdateSet).innerHTML = updateSet;    
    SetTextElementByName(_divWhereKeys,whereKeys);
}

function SetKeys(fields, keysFields) {
    for (i = 0; i < keysFields.length; i++) {
        for (j = 0; j < fields.length; j++) {
            if (keysFields[i].COLUMN_NAME == fields[j].COLUMN_NAME) {
                fields[j].IS_KEY = true;
                break;
            }
        }
    }
    console.log(fields);
    return fields;
}