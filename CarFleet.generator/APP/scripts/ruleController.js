var _lblCrudName = "lblCrudName";
var _lblRuleName = "lblRuleName";

function Init() {
    var connection, fieldsObject;
    fieldsObject = JSON.parse(_GetLocalStorage(_fieldsObject));
    connection = JSON.parse(_GetLocalStorage(_connectionObject));
    SetTextElementByName(_lblCrudName, GetUpperTable(connection.tableName) + "Crud");
    SetTextElementByName(_lblRuleName, GetUpperTable(connection.tableName) + "Rule");
}