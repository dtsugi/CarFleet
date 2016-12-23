import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { SecurityService } from '../../../services/security.service';
import { UserSessionEntity } from '../../../models/UserSessionEntity';

@Component({
    templateUrl: 'user-info-view.html',
    providers: [SecurityService]
})

export class UserInfoViewPage {
    userSessionEntity: UserSessionEntity;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public toastCtrl: ToastController,
        private _securityService: SecurityService) {
    }

    ngOnInit() {
        this.loadInfoUser();
    }

    loadInfoUser() {
        this.userSessionEntity = this._securityService.getInitialConfigSession();
    }

}

