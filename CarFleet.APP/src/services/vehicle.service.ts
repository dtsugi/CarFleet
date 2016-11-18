import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { VEHICLE_LIST } from '../mocks/vehicle.mock';

@Injectable()
export class VehicleService {
    public actionUrl: string = AppConfig.API_URL + "api/Vehicle/Get/";
    public url = "";
    // api/Vehicle/Get/{id}/{idCompany}/{idFleet}/{idVehicleType}/{idDriver}

    constructor(private _http: Http) { }

    get(id, idCompany, idFleet, idVehicleType, idDriver): any {
        id = Utils.IsValidApiParameter(id);
        idCompany = Utils.IsValidApiParameter(idCompany);
        idFleet = Utils.IsValidApiParameter(idFleet);
        idVehicleType = Utils.IsValidApiParameter(idVehicleType);
        idDriver = Utils.IsValidApiParameter(idDriver);
        this.url = Utils.SetUrlApiGet(this.actionUrl, [id, idCompany, idFleet, idVehicleType, idDriver]);
        console.log("URL" + this.url);
        // return this._http.get(this.url)
        //     .map(response => response.json());

        if (idCompany != null) {
            return VEHICLE_LIST.filter((vehicle) => {
                return (vehicle.Id_company.toLowerCase().indexOf(idCompany.toLowerCase()) > -1);
            })
        }
        else
            return VEHICLE_LIST;
    }
}