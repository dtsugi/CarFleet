import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { VehicleService } from '../../../services/vehicle.service';
import { VehicleViewPage } from '../vehicle/vehicle-view';
import { Utils, ConstantsConfig, Enum } from '../../../app/utils';

@Component({
    templateUrl: 'fleet-vehicle-list.html',
    providers: [VehicleService]
})

export class FleetVehicleListPage {
    fleetSelected;
    vehicleList = [];

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public toastCtrl: ToastController,
        private _vehicleService: VehicleService) {
    }

    ngOnInit() {
        this.fleetSelected = this.navParams.get("fleetSelected");
        this.initVehicleList();
    }

    viewVehicle(vehicle) {
        console.log(vehicle);
        this.navCtrl.push(VehicleViewPage, { vehicleSelected: vehicle });
    }

    initVehicleList() {
        this._vehicleService.getByFleetId(this.fleetSelected.Id)
            .subscribe(
            res => {
                console.log(res);
                if (Utils.IsArrayNotEmpty(res))
                    this.vehicleList = res;
                else
                    Utils.ShowToast(this.toastCtrl, Enum.TOAST_POSITION.bottom, ConstantsConfig.RES_SIN_REGISTROS, 3000);
            },
            error => {
                console.log(error);
                Utils.ShowToast(this.toastCtrl, Enum.TOAST_POSITION.bottom, ConstantsConfig.ERR_GNR_APP, 3000);
            });
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

