import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import { CalculosConsumosPage } from './calculos-consumos/calculos-consumos';
import { LugaresFrecuentadosPage } from './lugares-frecuentados/lugares-frecuentados';
import { AceleracionesFrenadasPage } from './aceleraciones-frenadas/aceleraciones-frenadas';
import { DriverService } from '../../services/driver.service';

@Component({
  templateUrl: 'habitos-conduccion-home.html',
  providers: [DriverService]
})

export class HabitosConduccionHomePage {

  driverList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _driverService: DriverService) {
  }

  tappedMenu(event) {
    switch (event) {
      case 0:
        this.navCtrl.push(CalculosConsumosPage);
        break;
      case 1:
        this.navCtrl.push(LugaresFrecuentadosPage);
        break;
      case 2:
        this.navCtrl.push(AceleracionesFrenadasPage);
        break;
    }
  }

  GetDriver() {
    // this._driverService.get(null, null)
    //   .subscribe(list => {
    //     console.log(list);
    //     this.driverList = list;
    //   })
    this.driverList = this._driverService.get(null, null);
    console.log(this.driverList);
  }
}

