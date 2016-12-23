import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { Company } from '../models/Company';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {
    public actionUrl: string = AppConfig.API_URL + "api/Company/GetById/";
    public url = "";
    // api/Company/GetById/{id}/{id_companytype}/{id_drivingrulesconfiguration}/{id_platform_service}

    constructor(private _http: Http) { }

    get(id, id_companytype, id_drivingrulesconfiguration, id_platform_service): any {
        id = Utils.IsValidApiParameter(id);
        id_companytype = Utils.IsValidApiParameter(id_companytype);
        id_drivingrulesconfiguration = Utils.IsValidApiParameter(id_drivingrulesconfiguration);
        id_platform_service = Utils.IsValidApiParameter(id_platform_service);
        this.url = Utils.SetUrlApiGet(this.actionUrl, [id, id_companytype, id_drivingrulesconfiguration, id_platform_service]);
        console.log("URL:" + this.url);        
        return this._http.get(this.url)
            .map((response: Response) => response.json());                    
    }
}