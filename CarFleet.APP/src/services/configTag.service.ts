import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigTagService {
    public actionUrl: string = AppConfig.API_URL + "api/ConfigTag/";
    public url = "";
    // api/MaintenanceOperationCompany/Get/{id}/{idCompany}/{idMaintenanceOperation}        

    constructor(private _http: Http) { }

    insert(configTagEntity): any {
        let bodyString = JSON.stringify(configTagEntity);
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers });
        this.url = Utils.SetUrlApiGet(this.actionUrl + "Insert/", []);
        console.log("URL" + this.url);
        return this._http.post(this.url, bodyString, options)
            .map(response => response.json());
    }

    getAll(): any {
        this.url = Utils.SetUrlApiGet(this.actionUrl + "GetAll", []);
        console.log("URL" + this.url);
        return this._http.get(this.url)
            .map(response => response.json());
    }
}