import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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

    getTotalByCompanyId(idCompany) {
        this.url = Utils.SetUrlApiGet(this.actionUrl + "GetTotalByCompanyId/", [idCompany]);
        console.log("URL" + this.url);
        return this._http.get(this.url)
            .map(response => response.json());
    }

    getTotalByCompanyAndFleetId(idCompany,idFleet) {
        this.url = Utils.SetUrlApiGet(this.actionUrl + "GetTotalByCompanyAndFleetId/", [idCompany,idFleet]);
        console.log("URL" + this.url);
        return this._http.get(this.url)
            .map(response => response.json());
    }

    
}