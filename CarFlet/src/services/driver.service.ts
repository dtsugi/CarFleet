import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DriverService {
    public actionUrl: string = AppConfig.API_URL + "api/driver/";
    public headers = new Headers();
    public url = "";

    constructor(private _http: Http) { }

    getByCompanyId(idCompany): any {
        this.url = Utils.SetUrlApiGet(this.actionUrl + "GetByCompanyId/", [idCompany]);
        console.log("URL" + this.url);
        return this._http.get(this.url)
            .map(response => response.json());
    }

    getTotalByCompanyId(idCompany) {
        this.url = Utils.SetUrlApiGet(this.actionUrl + "GetTotalByCompanyId/", [idCompany]);
        console.log("URL" + this.url);
        return this._http.get(this.url)
            .map(response => response.json());
    }
}