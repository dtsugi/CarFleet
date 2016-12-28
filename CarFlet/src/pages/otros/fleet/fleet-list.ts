import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FleetService } from '../../../services/fleet.service';
import { Utils, ConstantsConfig, Enum } from '../../../app/utils';
import { FleetVehicleListPage } from './fleet-vehicle-list';

@Component({
    templateUrl: 'fleet-list.html',
    providers: [FleetService]
})

export class FleetListPage {

    fleetList = [];

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public toastCtrl: ToastController,
        private _fleetService: FleetService) {
    }

    ngOnInit() {
        this.initFleetList();
    }

    initFleetList() {
        var idCompany = localStorage.getItem(ConstantsConfig.USER_COMPANY_ID_LS);
        this._fleetService.getByCompanyId(idCompany)
            .subscribe(
            res => {
                console.log(res);
                if (Utils.IsArrayNotEmpty(res))
                    this.fleetList = res;
                else
                    Utils.ShowToast(this.toastCtrl, Enum.TOAST_POSITION.bottom, ConstantsConfig.RES_SIN_REGISTROS, 3000);
            },
            error => {
                console.log(error);
                Utils.ShowToast(this.toastCtrl, Enum.TOAST_POSITION.bottom, ConstantsConfig.ERR_GNR_APP, 3000);
            });
    }

    searchFleet(ev: any) {
        this.initFleetList();
        let val = ev.target.value;
        if (val && val.trim() != '') {
            this.fleetList = this.fleetList.filter((item) => {
                return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    viewVehicleList(fleet) {
        this.navCtrl.push(FleetVehicleListPage, { fleetSelected: fleet });
    }
}

