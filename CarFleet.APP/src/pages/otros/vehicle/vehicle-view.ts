import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'vehicle-view.html'
})

export class VehicleViewPage {

    vehicle;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ngOnInit() {
        this.vehicle = this.navParams.get("vehicleSelected");
    }
}

