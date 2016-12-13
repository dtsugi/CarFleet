function GetStpName(field) {
    var newField = "STP_", ascii;
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
    return newField;
}

function SetTextElementByName(name, text) {
    var elements = document.getElementsByName(name);
    for (i = 0; i < elements.length; i++) {
        elements[i].innerHTML = text;
    }
}

function GetUpperTable(tableName) {
    var text = tableName[0].toUpperCase();
    text += tableName.slice(1);
    return text;
}

function IsNumericType(columnType) {
    if (columnType.includes("int") || columnType.includes("decimal")
        || columnType.includes("numeric"))
        return true;
    else
        return false;
}

function IsVarcharType(columnType) {
    if (columnType.includes("varchar") || columnType.includes("text"))
        return true;
    else
        return false;
}

function IsDatetimeType(columnType) {
    if (columnType.includes("date") || columnType.includes("datetime"))
        return true;
    else
        return false;
}