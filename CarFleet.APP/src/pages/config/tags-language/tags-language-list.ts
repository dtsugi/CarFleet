import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LanguageService } from '../../../services/language.service';
import { TagsLanguageViewPage } from './tags-language-view';
@Component({
    templateUrl: 'tags-language-list.html',
    providers: [LanguageService]
})

export class TagsLanguageListPage {
    languageList = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private _languageService: LanguageService) {
    }

    ngOnInit() {
        this.initLanguageList();
    }

    initLanguageList() {
        this._languageService.selectAll()
            .subscribe(res => {
                this.languageList = res;
            });
    }

    viewTagsSelectedLanguage(language) {
        console.log(language);
        this.navCtrl.push(TagsLanguageViewPage, { languageSelected: language.Id });
    }

}

