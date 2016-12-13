var _lblCrudName = "lblCrudName";
var _divParametersMapId = "divParametersMap";
var _lblEntityName = "lblEntityName";

function Init() {
    var connection, fieldsObject;
    fieldsObject = JSON.parse(_GetLocalStorage(_fieldsObject));
    connection = JSON.parse(_GetLocalStorage(_connectionObject));
    SetTextElementByName(_lblEntityName, connection.tableName + "Entity");
    SetTextElementByName(_lblCrudName, GetUpperTable(connection.tableName) + "Crud");
    document.getElementById(_divParametersMapId).innerHTML = LoadDivParametersMap(fieldsObject);
}

function LoadDivParametersMap(fields) {
    var text = "";
    for (i = 0; i < fields.length; i++) {
        if (fields[i].IS_NULLABLE == "YES") {
            text += "if (base.HasValueRecord(record[\"" + fields[i].COLUMN_NAME + "\"])) { ";
            text = ValidateDataType(fields[i], text);
            text += "}";
        } else {
            text = ValidateDataType(fields[i], text);
        }
        text += "<br>";
    }
    return text;
}

function ValidateDataType(field, text) {
    console.log(field);
    console.log(text);
    if (IsNumericType(field.DATA_TYPE)) {
        text += "entity." + field.ENTITY_NAME + " =(int)base.GetValueRecord(record[\"" + field.COLUMN_NAME + "\"],Utils.Constants.DATA_TYPES." + field.DATA_TYPE.toUpperCase() + ");";
    } else if (IsVarcharType(field.DATA_TYPE)) {
        text += "entity." + field.ENTITY_NAME + " =(string)base.GetValueRecord(record[\"" + field.COLUMN_NAME + "\"],Utils.Constants.DATA_TYPES." + field.DATA_TYPE.toUpperCase() + ");";
    } else if (IsDatetimeType(field.DATA_TYPE)) {
        text += "entity." + field.ENTITY_NAME + " =(DateTime)base.GetValueRecord(record[\"" + field.COLUMN_NAME + "\"],Utils.Constants.DATA_TYPES." + field.DATA_TYPE.toUpperCase() + ");";
    }
    return text;
}