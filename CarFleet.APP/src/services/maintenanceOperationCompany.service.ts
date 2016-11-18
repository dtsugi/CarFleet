import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';

@Injectable()
export class MaintenanceOperationCompanyService {
    public actionUrl: string = AppConfig.API_URL + "api/MaintenanceOperationCompany/Get/";
    public url = "";
    // api/MaintenanceOperationCompany/Get/{id}/{idCompany}/{idMaintenanceOperation}        

    constructor(private _http: Http) { }

    get(id, idCompany, idMaintenanceOperation): any {
        id = Utils.IsValidApiParameter(id);
        idCompany = Utils.IsValidApiParameter(idCompany);
        idMaintenanceOperation = Utils.IsValidApiParameter(idMaintenanceOperation);
        this.url = Utils.SetUrlApiGet(this.actionUrl, [id, idCompany, idMaintenanceOperation]);
        console.log("URL" + this.url);
        return this._http.get(this.url)
            .map(response => response.json());
    }
}