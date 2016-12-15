import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AsistenciaConductorPage } from './asistencia-conductor/asistencia-conductor';
import { PrimerosAuxiliosHomePage } from './primeros-auxilios/primeros-auxilios-home';
import { PinchazoNeumaticoHomePage } from './pinchazo-neumatico/pinchazo-neumatico-home';

@Component({
  templateUrl: 'asistente-virtual-home.html'
})
export class AsistenteVirtualHomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToPrimerosAuxilios() {
    this.navCtrl.push(PrimerosAuxiliosHomePage);
  }

  goToPinchazo() {
    this.navCtrl.push(PinchazoNeumaticoHomePage);
  }
}
