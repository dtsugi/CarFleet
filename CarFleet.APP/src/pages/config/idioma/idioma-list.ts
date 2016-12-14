import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { LanguageService } from '../../../services/language.service';
import { UserService } from '../../../services/user.service';
import { Utils, ConstantsConfig, Enum } from '../../../app/utils';

@Component({
    templateUrl: 'idioma-list.html',
    providers: [LanguageService, UserService]
})

export class IdiomaListPage {
    languageSelected;
    languageList = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private _languageService: LanguageService, private _userService: UserService) {
    }

    ngOnInit() {
        this.initIdiomaList();
    }

    initIdiomaList() {
        this._languageService.selectAll()
            .subscribe(res => {
                console.log(res);
                this.languageList = res;
            });
    }

    changeLanguage() {
        console.log(this.languageSelected);
        var idUser = localStorage.getItem(ConstantsConfig.USER_ID_LS);
        var idLanguage = this.languageSelected;
        this._userService.updateLanguage(idUser, idLanguage)
            .subscribe(res => {
                localStorage.setItem(ConstantsConfig.USER_LANGUAGE_ID_LS, idLanguage);
                Utils.ShowToast(this.toastCtrl, Enum.TOAST_POSITION.bottom, "El idioma se actualizo correctemente, este cambio se vera reflejado la proxima vez que inicie sesion", 3000);
            },
            error => {
                console.log(error);
                Utils.ShowToast(this.toastCtrl, Enum.TOAST_POSITION.bottom, "Error al actualizar el idioma", 3000);
            });
    }

}

