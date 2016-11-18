import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { FLEET_LIST } from '../mocks/fleet.mock';

@Injectable()
export class FleetService {
    public actionUrl: string = AppConfig.API_URL + "api/Fleet/GetById/";
    public url = "";
    // api/Fleet/GetById/{id}/{idCompany}        

    constructor(private _http: Http) { }

    get(id, idCompany): any {
        id = Utils.IsValidApiParameter(id);
        idCompany = Utils.IsValidApiParameter(idCompany);
        this.url = Utils.SetUrlApiGet(this.actionUrl, [id, idCompany]);
        console.log("URL" + this.url);
        // return this._http.get(this.url)
        //     .map(response => response.json());

        if (idCompany != null) {
            return FLEET_LIST.filter((fleet) => {
                return (fleet.Id_company.toLowerCase().indexOf(idCompany.toLowerCase()) > -1);
            })
        }
        else
            return FLEET_LIST;
    }
}