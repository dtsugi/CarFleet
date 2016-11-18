import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';

@Injectable()
export class Service {
    public actionUrl: string = AppConfig.API_URL + "api//Get/";
    public url = "";
    // api/MaintenanceOperationCompany/Get/{id}/{idCompany}/{idMaintenanceOperation}        

    constructor(private _http: Http) { }

    get(id): any {
        id = Utils.IsValidApiParameter(id);
        // = Utils.IsValidApiParameter();        
        this.url = Utils.SetUrlApiGet(this.actionUrl, []);
        console.log("URL" + this.url);
        return this._http.get(this.url)
            .map(response => response.json());
    }
}