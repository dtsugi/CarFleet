import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecurityService } from '../../services/security.service';
import { LogService } from '../../services/log.service';
import { Utils, ConstantsConfig, Enum } from '../../app/utils';

@Component({
  templateUrl: 'home.html',
  providers: [SecurityService, LogService]
})
export class HomePage {
  url: string;

  constructor(public navCtrl: NavController,
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
      },
      () => console.log("FINISHED IS AUTHENTICATED"));
  }

}
