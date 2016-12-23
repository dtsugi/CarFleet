import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConfigTagLanguageService } from '../../../services/configTagLanguage.service';
import { ConstantsConfig } from '../../app/utils';
import { TagsLanguageEditPage } from './tags-language-edit';

@Component({
    templateUrl: 'tags-language-view.html',
    providers: [ConfigTagLanguageService]
})

export class TagsLanguageViewPage {
    tagLanguageList = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private _configTagLanguageService: ConfigTagLanguageService) {
    }

    ngOnInit() {
        this.initIdiomaList(this.navParams.get("languageSelected"));

    }

    initIdiomaList(idLanguage) {
        // var idLanguage = localStorage.getItem(ConstantsConfig.USER_LANGUAGE_LS);
        console.log(idLanguage);
        this._configTagLanguageService.getByLanguage(idLanguage)
            .subscribe(res => {
                console.log(res);
                this.tagLanguageList = res;
            });
    }

    editTagsSelectedLanguage(tagLanguage) {
        console.log(tagLanguage);
        this.navCtrl.push(TagsLanguageEditPage, { tagLanguageSelected: tagLanguage });
    }

}

