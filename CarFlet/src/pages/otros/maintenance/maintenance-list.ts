import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MaintenanceOperationService } from '../../../services/maintenanceOperation.service';

@Component({
    templateUrl: 'maintenance-list.html',
    providers: [MaintenanceOperationService]
})

export class MaintenanceListPage {

    maintenanceList = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private _maintenanceService: MaintenanceOperationService) {
    }

    ngOnInit() {
        this.initMaintenanceList();
    }

    initMaintenanceList() {
        this.maintenanceList = this._maintenanceService.get(null);
    }

    searchMaintenance(ev: any) {
        this.initMaintenanceList();
        let val = ev.target.value;
        if (val && val.trim() != '') {
            this.maintenanceList = this.maintenanceList.filter((item) => {
                if (item !== undefined) {
                    return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                }
            })
        }
    }
}

