import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VehicleService } from '../../../services/vehicle.service'

@Component({
    templateUrl: 'aceleraciones-frenadas.html',
    providers: [VehicleService]
})
export class AceleracionesFrenadasPage {

    vehicleList = [];
    vehicleSelected;
    
    constructor(public navCtrl: NavController, public navParams: NavParams, private _vehicleService: VehicleService) {

    }

    ngOnInit() {
        this.initVehicleList();
    }

    initVehicleList() {
        // var companyId = localStorage.getItem(COMPANY_ID_LS);
        // this.vehicleList = this._vehicleService.get(null, companyId, null, null, null);
    }
}
