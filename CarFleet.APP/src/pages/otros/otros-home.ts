import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { DriverListPage } from './driver/driver-list';
import { VehicleListPage } from './vehicle/vehicle-list';
import { FleetListPage } from './fleet/fleet-list';
import { MaintenanceListPage } from './maintenance/maintenance-list';
import { ConfigTagLanguageService } from '../../services/configTagLanguage.service';
import { Utils, ConstantsConfig, Enum } from '../../app/utils';
import { TagApp } from '../../models/TagApp';

@Component({
    templateUrl: 'otros-home.html',
    providers: [ConfigTagLanguageService]
})

export class OtrosHomePage {
    lblOtTitlePage: TagApp;
    lblOtItemFlotas: TagApp;
    lblOtItemConductores: TagApp;
    lblOtItemVehiculos: TagApp;
    lblOtItemOpcMantenimiento: TagApp;

    tagsListOtros = [];
    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private _configTagLanguageService: ConfigTagLanguageService) {
        this.lblOtTitlePage = new TagApp("lblOtTitlePage", "");
        this.lblOtItemFlotas = new TagApp("lblOtItemFlotas", "");
        this.lblOtItemConductores = new TagApp("lblOtItemConductores", "");
        this.lblOtItemVehiculos = new TagApp("lblOtItemVehiculos", "");
        this.lblOtItemOpcMantenimiento = new TagApp("lblOtItemOpcMantenimiento", "");
    }

    ngOnInit() {
        this.getTagLanguage();
    }

    getTagLanguage() {
        var idLanguage = localStorage.getItem(ConstantsConfig.USER_LANGUAGE_ID_LS);
        this._configTagLanguageService.getByLanguage(idLanguage)
            .subscribe(
            res => {
                console.log(res);
                this.tagsListOtros = res;
                this.initTranslationTags();
            },
            error => {
                console.log(error);
                Utils.ShowToast(this.toastCtrl, Enum.TOAST_POSITION.bottom, ConstantsConfig.ERR_GNR_APP, 3000);
            });
    }

    initTranslationTags() {
        this.lblOtTitlePage.Value = Utils.FilterTagLanguage(this.tagsListOtros, "lblOtTitlePage");
        this.lblOtItemFlotas.Value = Utils.FilterTagLanguage(this.tagsListOtros, "lblOtItemFlotas");
        this.lblOtItemConductores.Value = Utils.FilterTagLanguage(this.tagsListOtros, "lblOtItemConductores");
        this.lblOtItemVehiculos.Value = Utils.FilterTagLanguage(this.tagsListOtros, "lblOtItemVehiculos");
        this.lblOtItemOpcMantenimiento.Value = Utils.FilterTagLanguage(this.tagsListOtros, "lblOtItemOpcMantenimiento");
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

