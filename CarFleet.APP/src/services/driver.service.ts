import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { DRIVER_LIST } from '../mocks/driver.mock';

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
}