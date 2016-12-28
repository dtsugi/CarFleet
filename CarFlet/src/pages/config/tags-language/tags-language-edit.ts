import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ConfigTagLanguageService } from '../../../services/configTagLanguage.service';
import { Utils, ConstantsConfig, Enum } from '../../../app/utils';

@Component({
    templateUrl: 'tags-language-edit.html',
    providers: [ConfigTagLanguageService]
})

export class TagsLanguageEditPage {
    tagLanguageSelected;

    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private _configTagLanguageService: ConfigTagLanguageService) {
    }

    ngOnInit() {
        this.tagLanguageSelected = this.navParams.get("tagLanguageSelected");
    }

    update() {
        this._configTagLanguageService.update(this.tagLanguageSelected)
            .subscribe(res => {
                Utils.ShowToast(this.toastCtrl, Enum.TOAST_POSITION.bottom, "El registro se actualizo exitosamente", 2000);
            });
    }

}

