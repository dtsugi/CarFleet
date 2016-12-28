import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppConfig } from '../app/app.config';
import { Utils, ConstantsConfig, Enum } from '../app/utils';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserSessionEntity } from '../models/UserSessionEntity';

@Injectable()
export class SecurityService {
    public actionUrl: string = AppConfig.API_URL + "api/Security/";
    public url = "";
    userSession: UserSessionEntity;

    constructor(private _http: Http) { }

    setInitialConfigSession(userSessionEntity: UserSessionEntity) {
        localStorage.setItem(ConstantsConfig.USER_ID_LS, userSessionEntity.IdUser.toString());
        localStorage.setItem(ConstantsConfig.USER_NAME_LS, userSessionEntity.UserName);
        localStorage.setItem(ConstantsConfig.USER_PASSWORD_LS, userSessionEntity.Password);
        localStorage.setItem(ConstantsConfig.USER_TOKEN_LS, userSessionEntity.Token);
        localStorage.setItem(ConstantsConfig.USER_DEVICE_UUID_LS, userSessionEntity.DeviceUUID);
        localStorage.setItem(ConstantsConfig.USER_STAY_SESSION_LS, userSessionEntity.StaySession.toString());
        localStorage.setItem(ConstantsConfig.USER_COMPANY_ID_LS, userSessionEntity.IdCompany.toString());
        localStorage.setItem(ConstantsConfig.USER_LANGUAGE_ID_LS, userSessionEntity.IdLanguage.toString());
    }

    getInitialConfigSession() {

        this.userSession = new UserSessionEntity();
        this.userSession.IdUser = Number(localStorage.getItem(ConstantsConfig.USER_ID_LS));
        this.userSession.UserName = localStorage.getItem(ConstantsConfig.USER_NAME_LS);
        this.userSession.Password = localStorage.getItem(ConstantsConfig.USER_PASSWORD_LS);
        this.userSession.Token = localStorage.getItem(ConstantsConfig.USER_TOKEN_LS);
        this.userSession.DeviceUUID = localStorage.getItem(ConstantsConfig.USER_DEVICE_UUID_LS);
        var staySession = localStorage.getItem(ConstantsConfig.USER_STAY_SESSION_LS);
        this.userSession.StaySession = (staySession === "true");
        this.userSession.IdCompany = Number(localStorage.getItem(ConstantsConfig.USER_COMPANY_ID_LS));
        this.userSession.IdLanguage = Number(localStorage.getItem(ConstantsConfig.USER_LANGUAGE_ID_LS));
        return this.userSession;
    }

    logout() {
        this.userSession = this.getInitialConfigSession();
        /* Si se mantiene la session no se borran los datos */
        // if (!this.userSession.StaySession) {
        localStorage.removeItem(ConstantsConfig.USER_ID_LS);
        localStorage.removeItem(ConstantsConfig.USER_NAME_LS);
        localStorage.removeItem(ConstantsConfig.USER_PASSWORD_LS);
        localStorage.removeItem(ConstantsConfig.USER_TOKEN_LS);
        localStorage.removeItem(ConstantsConfig.USER_DEVICE_UUID_LS);
        localStorage.removeItem(ConstantsConfig.USER_STAY_SESSION_LS);
        localStorage.removeItem(ConstantsConfig.USER_COMPANY_ID_LS);
        localStorage.removeItem(ConstantsConfig.USER_LANGUAGE_ID_LS);
        // }
    }

    isAuthenticated() {
        this.userSession = this.getInitialConfigSession();
        let bodyString = JSON.stringify(this.userSession);
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        this.url = Utils.SetUrlApiGet(this.actionUrl + "IsAuthenticated", []);
        console.log("URL" + this.url);
        return this._http.post(this.url, bodyString, options)
            .map(response => response.json());
    }

    loadStaySession() {
        this.userSession = this.getInitialConfigSession();
        return this.userSession.StaySession;
    }
}