import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FleetService {
    public actionUrl: string = AppConfig.API_URL + "api/Fleet/";
    public url = "";

    constructor(private _http: Http) { }

    // getBycompanyId(idCompany): any {
    //     idCompany = Utils.IsValidApiParameter(idCompany);
    //     this.url = Utils.SetUrlApiGet(this.actionUrl, [idCompany]);
    //     console.log("URL" + this.url);
    //     var result = "";
    //     return this._http.get(this.url)
    //         // .map(res => {
    //         //     // If request fails, throw an Error that will be caught
    //         //     if (res.status < 200 || res.status >= 300) {
    //         //         throw new Error('This request has failed ' + res.status);
    //         //     }
    //         //     // If everything went fine, return the response
    //         //     else {
    //         //         return res.json();
    //         //     }
    //         // })
    //         // .subscribe(
    //         // data => {
    //         //     console.log("DATA:");
    //         //     console.log(data);
    //         //     result = data;
    //         // },
    //         // error => {
    //         //     console.log("ERROR:");
    //         //     console.log(error); //gives an object at this point        
    //         // }
    //         // );
    //         .map(response => response.json());        
    // }

    getByCompanyId(idCompany): any {
        this.url = Utils.SetUrlApiGet(this.actionUrl + "GetByCompanyId/", [idCompany]);
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
}