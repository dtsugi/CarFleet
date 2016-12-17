import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConfigTagService } from '../../../services/configTag.service';

@Component({
    templateUrl: 'tags-insert.html',
    providers: [ConfigTagService]
})

export class TagInsertPage {
    configTag = { Id: 0, Tag_key: "", Page_name: "" };
    //configTag = {};

    constructor(public navCtrl: NavController, public navParams: NavParams, private _configTagService: ConfigTagService) {
    }

    ngOnInit() {
    }

    saveConfigTag() {
        this._configTagService.insert(this.configTag)
            .subscribe(res => {
                console.log(res);
            });
    }
}

