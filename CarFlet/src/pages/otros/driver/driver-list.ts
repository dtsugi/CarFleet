import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { DriverService } from '../../../services/driver.service';
import { DriverViewPage } from './driver-view';
import { Utils, ConstantsConfig, Enum } from '../../../app/utils';

@Component({
    templateUrl: 'driver-list.html',
    providers: [DriverService]
})

export class DriverListPage {

    driverList = [];

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public toastCtrl: ToastController,
        private _driverService: DriverService) {
    }

    ngOnInit() {
        this.initDriverList();
    }

    viewDriver(driver) {
        this.navCtrl.push(DriverViewPage, { driverSelected: driver });
    }

    initDriverList() {
        var idCompany = localStorage.getItem(ConstantsConfig.USER_COMPANY_ID_LS);
        this._driverService.getByCompanyId(idCompany)
            .subscribe(
            res => {
                console.log(res);
                if (Utils.IsArrayNotEmpty(res))
                    this.driverList = res;
                else
                    Utils.ShowToast(this.toastCtrl, Enum.TOAST_POSITION.bottom, ConstantsConfig.RES_SIN_REGISTROS, 3000);
            },
            error => {
                console.log(error);
                Utils.ShowToast(this.toastCtrl, Enum.TOAST_POSITION.bottom, ConstantsConfig.ERR_GNR_APP, 3000);
            });
    }

    searchDriver(ev: any) {
        this.initDriverList();
        let val = ev.target.value;
        if (val && val.trim() != '') {
            this.driverList = this.driverList.filter((item) => {
                return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
}

