import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'driver-view.html'
})

export class DriverViewPage {

    driver;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ngOnInit() {
        this.driver = this.navParams.get("driverSelected");
    }
}

