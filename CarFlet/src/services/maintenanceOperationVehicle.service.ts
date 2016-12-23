import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MaintenanceOperationVehicleService {
    public actionUrl: string = AppConfig.API_URL + "api/MaintenanceOperationVehicle/Get/";
    public url = "";
    // api/MaintenanceOperationVehicle/Get/{id}/{idVehicle}/{idMaintenanceOperation}
    constructor(private _http: Http) { }

    get(id, idVehicle, idMaintenanceOperation): any {
        id = Utils.IsValidApiParameter(id);
        idVehicle = Utils.IsValidApiParameter(idVehicle);
        idMaintenanceOperation = Utils.IsValidApiParameter(idMaintenanceOperation);
        this.url = Utils.SetUrlApiGet(this.actionUrl, [id, idVehicle, idMaintenanceOperation]);
        console.log("URL" + this.url);
        return this._http.get(this.url)
            .map(response => response.json());
    }
}