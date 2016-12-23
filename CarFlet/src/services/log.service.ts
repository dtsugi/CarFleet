import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AppConfig } from '../app/app.config';
import { Utils } from '../app/utils';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LogService {
    constructor(
        private _http: Http,
        public toastCtrl: ToastController
    ) { }

    _ShowFlare(position: string, message: string, duration: number) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.present(toast);
    }

    _ShowFlareFromErrorResult(position: string, errorResult, duration: number, messageGral: string) {
        var errorObject = JSON.parse(errorResult._body);
        console.log("LOG:");
        console.log(errorObject.Message);
        if (!Utils.IsEmpty(errorObject.Message)) {
            this._ShowFlare(position, errorObject.Message, duration);
        }
        else
            this._ShowFlare(position, messageGral, duration);
    }

    _LogError(errorResult) {
        console.log("ERROR BEGIN");
        console.log(errorResult);
        console.log(errorResult._body);
        console.log(errorResult._body.Message);
        console.log(JSON.parse(errorResult._body));
        console.log("ERROR END");
    }
}