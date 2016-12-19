import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VehicleTypeService {
    public actionUrl: string = AppConfig.API_URL + "api/VehicleType/GetById/";
    public url = "";
    // api/VehicleType/GetById/{id}

    constructor(private _http: Http) { }

    get(id): any {
        id = Utils.IsValidApiParameter(id);
        this.url = Utils.SetUrlApiGet(this.actionUrl, [id]);
        console.log("URL" + this.url);
        return this._http.get(this.url)
            .map(response => response.json());
    }
}