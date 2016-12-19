import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigTagLanguageService {
    public actionUrl: string = AppConfig.API_URL + "api/ConfigTagLanguage/";
    public url = "";

    constructor(private _http: Http) { }

    getByPageName(pageName): any {
        pageName = Utils.IsValidApiParameter(pageName);
        // = Utils.IsValidApiParameter();        
        this.url = Utils.SetUrlApiGet(this.actionUrl + "GetByPageName/", [pageName]);
        console.log("URL" + this.url);
        return this._http.get(this.url)
            .map(response => response.json());
    }

    getByLanguage(languageId): any {
        languageId = Utils.IsValidApiParameter(languageId);
        // = Utils.IsValidApiParameter();        
        this.url = Utils.SetUrlApiGet(this.actionUrl + "GetByLanguage/", [languageId]);
        console.log("URL" + this.url);
        return this._http.get(this.url)
            .map(response => response.json());
    }

    update(configTagLanguageEntity): any {
        let bodyString = JSON.stringify(configTagLanguageEntity);
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        this.url = Utils.SetUrlApiGet(this.actionUrl + "Update/", []);
        console.log("URL" + this.url);
        return this._http.post(this.url, bodyString, options)
            .map(response => response.json());
    }
}