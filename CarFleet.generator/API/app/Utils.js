var errorMessage, isValidate = true, value;

exports.IsNumber = function IsNumber(value) {
    return (typeof value === 'number' && !Number.isNaN(value) ? true : false);
}

exports.IsBoolean = function IsBoolean(value) {
    return (typeof value === 'boolean' ? true : false);
}

exports.IsBit = function IsBit(value) {
    return (this.IsNumber(value) && (value == 0 || value == 1) ? true : false);
}

exports.IsDate = function IsDate(value) {
    return (value instanceof Date);
}

exports.IsNullOrEmpty = function IsNullOrEmpty(value) {
    console.log(value);
    console.log(typeof value);
    return (value == null || value.trim().length < 1);
}

exports.SetMapRoute = function SetMapRoute(mapRoute, componentName, methodName) {
    return (mapRoute + "/" + componentName + ":" + methodName);
}

exports.ViewPropertiesObject = function ViewPropertiesObject(object) {
    for (prop in object) {
        value = object[prop];
        console.log("PROP:" + prop);
        if (value instanceof Object || value instanceof Array) {
            ViewPropertiesObject(value);
        }
        else {
            if (typeof value !== 'function') {
                DescribePropertiesObject(value);
            }
        }
    }
}

function DescribePropertiesObject(object) {
    console.log("TYPE:" + typeof object);
    console.log("VALUE:" + object);
}