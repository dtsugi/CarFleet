import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IdiomaListPage } from './idioma/idioma-list';
import { TagListPage } from './tags/tags-list';
import { TagsLanguageListPage } from './tags-language/tags-language-list';

@Component({
    templateUrl: 'config-home.html'
})

export class ConfigHomePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    goSelectLanguage() {
        this.navCtrl.push(IdiomaListPage);
    }

    goSelectTags() {
        this.navCtrl.push(TagListPage);
    }

    goSelectTagsLanguage() {
        this.navCtrl.push(TagsLanguageListPage);
    }
}

