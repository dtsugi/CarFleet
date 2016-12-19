import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { DriverListPage } from './driver/driver-list';
import { VehicleListPage } from './vehicle/vehicle-list';
import { FleetListPage } from './fleet/fleet-list';
import { MaintenanceListPage } from './maintenance/maintenance-list';
import { Utils, ConstantsConfig, Enum } from '../../app/utils';
import { TagApp } from '../../models/TagApp';
// Services
import { ConfigTagLanguageService } from '../../services/configTagLanguage.service';
import { DriverService } from '../../services/driver.service';
import { FleetService } from '../../services/fleet.service';
import { VehicleService } from '../../services/vehicle.service';

@Component({
    templateUrl: 'otros-home.html',
    providers: [ConfigTagLanguageService, DriverService, FleetService, VehicleService]
})

export class OtrosHomePage {
    lblOtTitlePage: TagApp;
    lblOtItemFlotas: TagApp;
    lblOtItemConductores: TagApp;
    lblOtItemVehiculos: TagApp;
    lblOtItemOpcMantenimiento: TagApp;

    totalCountDriver: number = 0;
    totalCountFleet: number = 0;
    totalCountVehicle: number = 0;

    tagsListOtros = [];
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public toastCtrl: ToastController,
        private _configTagLanguageService: ConfigTagLanguageService,
        private _driverService: DriverService,
        private _fleetService: FleetService,
        private _vehicleService: VehicleService) {
        this.lblOtTitlePage = new TagApp("lblOtTitlePage", "");
        this.lblOtItemFlotas = new TagApp("lblOtItemFlotas", "");
        this.lblOtItemConductores = new TagApp("lblOtItemConductores", "");
        this.lblOtItemVehiculos = new TagApp("lblOtItemVehiculos", "");
        this.lblOtItemOpcMantenimiento = new TagApp("lblOtItemOpcMantenimiento", "");
    }

    ngOnInit() {
        var idCompany = localStorage.getItem(ConstantsConfig.USER_COMPANY_ID_LS);
        this.getTagLanguage();
        this.getTotalDriver(idCompany);
        this.getTotalFleet(idCompany);
        this.getTotalVehicle(idCompany);
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
            },
            () => console.log("FINISHED GET LANGUAGE"));
    }

    getTotalDriver(idCompany) {
        this._driverService.getTotalByCompanyId(idCompany)
            .subscribe(
            res => {
                console.log(res);
                this.totalCountDriver = res;
            },
            error => {
                console.log(error);
                Utils.ShowToast(this.toastCtrl, Enum.TOAST_POSITION.bottom, ConstantsConfig.ERR_GNR_APP, 3000);
            },
            () => console.log("FINISHED GET TOTAL DRIVER"));
    }

    getTotalFleet(idCompany) {
        this._fleetService.getTotalByCompanyId(idCompany)
            .subscribe(
            res => {
                console.log(res);
                this.totalCountFleet = res;
            },
            error => {
                console.log(error);
                Utils.ShowToast(this.toastCtrl, Enum.TOAST_POSITION.bottom, ConstantsConfig.ERR_GNR_APP, 3000);
            },
            () => console.log("FINISHED GET TOTAL FLEET"));
    }

    getTotalVehicle(idCompany) {
        this._vehicleService.getTotalByCompanyId(idCompany)
            .subscribe(
            res => {
                console.log(res);
                this.totalCountVehicle = res;
            },
            error => {
                console.log(error);
                Utils.ShowToast(this.toastCtrl, Enum.TOAST_POSITION.bottom, ConstantsConfig.ERR_GNR_APP, 3000);
            },
            () => console.log("FINISHED GET TOTAL VEHICLE"));
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

