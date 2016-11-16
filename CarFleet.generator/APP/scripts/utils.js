function GetValueElement(idElement) {
    return document.getElementById(idElement).value;
}

function SetLabelTextElement(idElement, text) {
    return document.getElementById(idElement).innerHTML = text;
}

function _SetLocalStorage(key, data) {
    localStorage.setItem(key, data);
}

function _GetLocalStorage(key) {
    return localStorage.getItem(key);
}

function _RemoveLocalStorage(key) {
    return localStorage.removeItem(key);
}

function _ClearLocalStorage() {
    return localStorage.clear();
}