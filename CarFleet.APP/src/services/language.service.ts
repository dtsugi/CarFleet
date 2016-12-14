import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';

@Injectable()
export class LanguageService {
    public actionUrl: string = AppConfig.API_URL + "api/Language/";
    public url = "";

    constructor(private _http: Http) { }

    getById(id): any {
        id = Utils.IsValidApiParameter(id);
        this.url = Utils.SetUrlApiGet(this.actionUrl + "GetById/", [id]);
        console.log("URL" + this.url);
        return this._http.get(this.url)
            .map(response => response.json());
    }

    selectAll(): any {
        this.url = Utils.SetUrlApiGet(this.actionUrl + "SelectAll/", []);
        console.log("URL" + this.url);
        return this._http.get(this.url)
            .map(response => response.json());
    }
}