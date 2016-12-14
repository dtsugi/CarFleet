import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { VEHICLE_LIST } from '../mocks/vehicle.mock';

@Injectable()
export class VehicleService {
    public actionUrl: string = AppConfig.API_URL + "api/Vehicle/";
    public url = "";
    // api/Vehicle/Get/{id}/{idCompany}/{idFleet}/{idVehicleType}/{idDriver}

    constructor(private _http: Http) { }

    getByCompanyId(idCompany): any {
        this.url = Utils.SetUrlApiGet(this.actionUrl + "GetByCompanyId/", [idCompany]);
        console.log("URL" + this.url);
        return this._http.get(this.url)
            .map(response => response.json());
    }

    getByFleetId(idFleet): any {
        this.url = Utils.SetUrlApiGet(this.actionUrl + "GetByFleetId/", [idFleet]);
        console.log("URL" + this.url);
        return this._http.get(this.url)
            .map(response => response.json());
    }
}