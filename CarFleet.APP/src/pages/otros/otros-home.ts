import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import { DriverListPage } from './driver/driver-list';
import { VehicleListPage } from './vehicle/vehicle-list';
import { FleetListPage } from './fleet/fleet-list';
import { MaintenanceListPage } from './maintenance/maintenance-list';

@Component({
    templateUrl: 'otros-home.html'
})

export class OtrosHomePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    goListDrivers() {
        this.navCtrl.push(DriverListPage);
    }

    goListVehicles() {
        this.navCtrl.push(VehicleListPage);
    }

    goListFleets() {
        this.navCtrl.push(FleetListPage);
    }

    goListMaintenance() {
        this.navCtrl.push(MaintenanceListPage);
    }
}

