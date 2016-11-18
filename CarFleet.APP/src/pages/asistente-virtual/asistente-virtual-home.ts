import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AsistenciaConductorPage } from './asistencia-conductor/asistencia-conductor';


@Component({
  templateUrl: 'asistente-virtual-home.html'
})
export class AsistenteVirtualHomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToAsistenciaConductor() {
    this.navCtrl.push(AsistenciaConductorPage);
  }
}
