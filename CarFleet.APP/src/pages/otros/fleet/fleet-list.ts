import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FleetService } from '../../../services/fleet.service';
import { COMPANY_ID_LS } from '../../../app/utils';

@Component({
    templateUrl: 'fleet-list.html',
    providers: [FleetService]
})

export class FleetListPage {

    fleetList = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private _fleetService: FleetService) {
    }

    ngOnInit() {
        this.initFleetList();
    }

    initFleetList() {
        var companyId = localStorage.getItem(COMPANY_ID_LS);        
        this.fleetList = this._fleetService.get(null, companyId);
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
}

