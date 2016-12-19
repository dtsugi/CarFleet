import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    public actionUrl: string = AppConfig.API_URL + "api/User/";
    public url = "";
    // api/MaintenanceOperationCompany/Get/{id}/{idCompany}/{idMaintenanceOperation}        

    constructor(private _http: Http) { }

    login(loginName): any {
        let bodyString = JSON.stringify({ loginName: loginName });
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        this.url = Utils.SetUrlApiGet(this.actionUrl + "Login/?loginName=" + loginName, []);
        console.log("URL" + this.url);
        return this._http.post(this.url, bodyString, options)
            .map(response => response.json());
    }

    updateLanguage(idUser, idLanguage): any {
        let bodyString = JSON.stringify({ idUser: idUser, idLanguage: idLanguage });
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        this.url = Utils.SetUrlApiGet(this.actionUrl + "UpdateLanguage/?idUser=" + idUser + "&idLanguage=" + idLanguage, []);
        console.log("URL" + this.url);
        return this._http.post(this.url, bodyString, options)
            .map(response => response.json());
    }
}