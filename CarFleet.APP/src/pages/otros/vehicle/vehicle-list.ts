import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VehicleService } from '../../../services/vehicle.service';
import { VehicleViewPage } from './vehicle-view';
import { COMPANY_ID_LS } from '../../../app/utils';

@Component({
    templateUrl: 'vehicle-list.html',
    providers: [VehicleService]
})

export class VehicleListPage {

    vehicleList = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private _vehicleService: VehicleService) {
    }

    ngOnInit() {
        this.initVehicleList();
    }

    viewVehicle(vehicle) {
        console.log(vehicle);
        this.navCtrl.push(VehicleViewPage, { vehicleSelected: vehicle });
    }

    initVehicleList() {
        var companyId = localStorage.getItem(COMPANY_ID_LS);        
        this.vehicleList = this._vehicleService.get(null, companyId, null, null, null);
    }

    searchVehicle(ev: any) {
        this.initVehicleList();
        let val = ev.target.value;
        if (val && val.trim() != '') {
            this.vehicleList = this.vehicleList.filter((item) => {
                return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
}

