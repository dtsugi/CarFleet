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
}

export const COMPANY_ID_LS = "companyIdLS";