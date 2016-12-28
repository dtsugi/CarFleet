import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { MAINTENANCE_OPERATION_LIST } from '../mocks/maintenanceOperation.mock';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MaintenanceOperationService {
    public actionUrl: string = AppConfig.API_URL + "api/MaintenanceOperation/Get/";
    public url = "";
    // api/MaintenanceOperation/Get/{id}
    constructor(private _http: Http) { }

    get(id): any {
        id = Utils.IsValidApiParameter(id);
        this.url = Utils.SetUrlApiGet(this.actionUrl, [id]);
        console.log("URL" + this.url);
        // return this._http.get(this.url)
        //     .map(response => response.json());

        return MAINTENANCE_OPERATION_LIST;
    }
}