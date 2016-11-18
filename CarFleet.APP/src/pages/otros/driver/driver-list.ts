import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DriverService } from '../../../services/driver.service';
import { DriverViewPage } from './driver-view';
import { COMPANY_ID_LS } from '../../../app/utils';

@Component({
    templateUrl: 'driver-list.html',
    providers: [DriverService]
})

export class DriverListPage {

    driverList = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private _driverService: DriverService) {
    }

    ngOnInit() {
        this.initDriverList();
    }

    viewDriver(driver) {
        this.navCtrl.push(DriverViewPage, { driverSelected: driver });
    }

    initDriverList() {
        var companyId = localStorage.getItem(COMPANY_ID_LS);
        this.driverList = this._driverService.get(null, companyId);
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

