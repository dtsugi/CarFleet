import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AsistenciaConductorPage } from './asistencia-conductor/asistencia-conductor';
import { PrimerosAuxiliosHomePage } from './primeros-auxilios/primeros-auxilios-home';
import { PinchazoNeumaticoHomePage } from './pinchazo-neumatico/pinchazo-neumatico-home';
import { SecurityService } from '../../services/security.service';
import { LogService } from '../../services/log.service';
import { Utils, ConstantsConfig, Enum } from '../../app/utils';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'asistente-virtual-home.html',
  providers: [SecurityService, LogService]
})
export class AsistenteVirtualHomePage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _SecurityService: SecurityService,
    private _LogService: LogService) {
  }

  ngOnInit() {
    this._SecurityService.isAuthenticated()
      .subscribe(
      res => {
        console.log(res);
      },
      error => {
        this._LogService._LogError(error);
        this._LogService._ShowFlareFromErrorResult(Enum.TOAST_POSITION.bottom, error, 3000, "Error autenticando el usuairo");
        this._SecurityService.logout();
        this.navCtrl.setRoot(LoginPage);
      },
      () => console.log("FINISHED IS AUTHENTICATED"));
  }

  goToPrimerosAuxilios() {
    this.navCtrl.push(PrimerosAuxiliosHomePage);
  }

  goToPinchazo() {
    this.navCtrl.push(PinchazoNeumaticoHomePage);
  }
}
