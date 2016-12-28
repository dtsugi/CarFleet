export class Utils {

    static IsValidApiParameter(parameter) {
        if (parameter === undefined || parameter == "null") {
            parameter = null;
        }
        return parameter;
    }

    static SetUrlApiGet(url, parameters: Array<any>) {
        for (var i = 0; i < parameters.length; i++) {
            url += parameters[i] + "/";
        }
        return url;
    }

    static IsEmpty(value) {
        if (value !== undefined && value.length > 0)
            return false;
        else
            return true;
    }

    static IsArrayNotEmpty(object) {
        return (object instanceof Array && object.length > 0);
    }

    static ShowToast(toastCtrl, position: string, message: string, duration: number) {
        let toast = toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.present(toast);
    }

    static FilterTagLanguage(tagsLanguageList, valueFilter) {
        var valueTag = "Valor no asignado";
        for (var i = 0; i < tagsLanguageList.length; i++) {
            if (tagsLanguageList[i].Tag_key.indexOf(valueFilter) >= 0) {
                valueTag = tagsLanguageList[i].Value_tag;
                break;
            }
        }
        return valueTag;
    }
}

export class ConstantsConfig {
    static USER_ID_LS = "userIdLS";
    static USER_NAME_LS = "usernameLS";
    static USER_PASSWORD_LS = "userPasswordLS";
    static USER_TOKEN_LS = "userTokenLS";
    static USER_DEVICE_UUID_LS = "userDeviceUUIDLS";
    static USER_STAY_SESSION_LS = "userStaySessionLS";
    static USER_COMPANY_ID_LS = "userCompanyIdLS";
    static USER_LANGUAGE_ID_LS = "userLanguageIdLS";

    static ERR_GNR_APP = "Sucedio un error al comunicarse con el servidor";
    static RES_NN = "Sin valor asignado";
    static RES_SIN_REGISTROS = "No se encontraron registros";

}

export class Enum {
    static TOAST_POSITION = { top: 'top', middle: 'middle', bottom: 'bottom' };
}