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
        if (IsNumericType(fields[i].DATA_TYPE))
            text += "entity." + fields[i].ENTITY_NAME + " =(int)record[\"" + fields[i].COLUMN_NAME + "\"]";
        else if (IsVarcharType(fields[i].DATA_TYPE))
            text += "entity." + fields[i].ENTITY_NAME + " =record[\"" + fields[i].COLUMN_NAME + "\"].ToString()";
        
        text += "<br>";
    }
    return text;
}
