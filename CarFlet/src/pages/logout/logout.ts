import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { SecurityService } from '../../services/security.service';
import { UserSessionEntity } from '../../models/UserSessionEntity';
import { LoginPage } from '../login/login';

@Component({
    template: "",
    providers: [SecurityService]
})

export class LogoutPage {
    constructor(public navCtrl: NavController,
        private _securityService: SecurityService) {
    }

    ngOnInit() {
        this._securityService.logout();
        this.navCtrl.setRoot(LoginPage);
    }
}