var _lblEntityNameId = "lblEntityName";
var _divAttributesId = "divAttributes";

function Init() {
    var connection, fieldsObject, entityName;
    fieldsObject = JSON.parse(_GetLocalStorage(_fieldsObject));
    connection = JSON.parse(_GetLocalStorage(_connectionObject));
    console.log(connection);
    console.log(fieldsObject);
    entityName = GetUpperTable(connection.tableName) + "Entity";
    SetTextElementByName(_lblEntityNameId, entityName);
    document.getElementById(_divAttributesId).innerHTML = LoadDivAttributes(fieldsObject);
}

function LoadDivAttributes(fields) {
    var text = "";
    for (i = 0; i < fields.length; i++) {
        if (IsNumericType(fields[i].DATA_TYPE))
            text += "public int ";
        else if (IsVarcharType(fields[i].DATA_TYPE))
            text += "public string ";

        text += fields[i].ENTITY_NAME + " {get; set;} <br>";
    }
    return text;
}
