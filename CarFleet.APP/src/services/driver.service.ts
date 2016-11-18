import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { DRIVER_LIST } from '../mocks/driver.mock';

@Injectable()
export class DriverService {
    public actionUrl: string = AppConfig.API_URL + "api/driver/GetById/";
    public headers = new Headers();
    public url = "";

    constructor(private _http: Http) { }

    get(id, idCompany): any {
        id = Utils.IsValidApiParameter(id);
        idCompany = Utils.IsValidApiParameter(idCompany);
        this.headers.append('Content-Type', 'application/json');
        this.url = Utils.SetUrlApiGet(this.actionUrl, [id, idCompany]);
        // this.url = this.actionUrl + "/" + id + "/" + idCompany;
        // this.options = new RequestOptionsArgs({
        //     url: this.url,
        //     method: RequestMethod.Get,
        //     headers: this.headers
        // });
        // return this._http.get(this.actionUrl + "/" + id + "/" + idCompany)
        //     .map(response => response.json());                
        // return this._http.request(new Request(this.options))
        //     .map(response => response.json());
        // let opt = this.configurarCabeceras();
        // console.log("URL" + this.url);
        // console.log("opt" + opt);
        // return this._http.get('http://carfleet2.azurewebsites.net/api/driver/GetById/null/null', {
        //     headers: this.headers,
        //     method: "GET"
        // })
        //     .map(response => response.json());
        console.log("ID COMP" + idCompany);
        if (idCompany != null) {
            return DRIVER_LIST.filter((driver) => {
                return (driver.Id_company.toLowerCase().indexOf(idCompany.toLowerCase()) > -1);
            })
        }
        else
            return DRIVER_LIST;
    }

    configurarCabeceras() {
        let headers = new Headers({
            'Content-Type': 'application/json'
        })
        // llamar a este método en cada llamada, equivale a los interceptores de Angular1
        return new RequestOptions({ headers: headers })
    }
}