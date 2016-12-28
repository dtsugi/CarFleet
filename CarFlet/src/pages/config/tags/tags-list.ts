import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConfigTagService } from '../../../services/configTag.service';
import { TagInsertPage } from './tags-insert'

@Component({
    templateUrl: 'tags-list.html',
    providers: [ConfigTagService]
})

export class TagListPage {
    tagList = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private _configTagService: ConfigTagService) {
    }

    ngOnInit() {
        this._configTagService.getAll()
            .subscribe(res => {
                console.log(res);
                this.tagList = res;
            });
    }

    goInsertTag() {
        this.navCtrl.push(TagInsertPage);
    }

}

