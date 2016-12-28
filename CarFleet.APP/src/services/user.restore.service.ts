import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserRestoreService {
    public actionUrl: string = AppConfig.API_URL + "api//UserRestore/";
    public url = "";

    constructor(private _http: Http) { }

    restorePassword(email): any {
        let bodyString = JSON.stringify({ email: email });
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        this.url = Utils.SetUrlApiGet(this.actionUrl + "RestorePassword/?email=" + email, []);
        console.log("URL" + this.url);
        return this._http.post(this.url, bodyString, options)
            .map(response => response.json());
    }

    verifyRestoreCode(email, code): any {
        let bodyString = JSON.stringify({ email: email, code: code });
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        this.url = Utils.SetUrlApiGet(this.actionUrl + "VerifyRestoreCode/?email=" + email + "&code=" + code, []);
        console.log("URL" + this.url);
        return this._http.post(this.url, bodyString, options)
            .map(response => response.json());
    }

    updatePassword(email, code, password): any {
        let bodyString = JSON.stringify({ email: email, code: code, newPassword: password });
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        this.url = Utils.SetUrlApiGet(this.actionUrl + "UpdatePassword/?email=" + email + "&code=" + code + "&newPassword=" + password, []);
        console.log("URL" + this.url);
        return this._http.post(this.url, bodyString, options)
            .map(response => response.json());
    }
}