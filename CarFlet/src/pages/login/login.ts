
import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { UserService } from '../../services/user.service';
import { SecurityService } from '../../services/security.service';
import { LogService } from '../../services/log.service';
import { HomePage } from '../home/home';
import { ForgetPasswordPage } from './forget-password';
import { Utils, ConstantsConfig, Enum } from '../../app/utils';
import { UserSessionEntity } from '../../models/UserSessionEntity';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
  providers: [UserService, SecurityService, LogService]
})
export class LoginPage {
  userSessionEntity: UserSessionEntity = new UserSessionEntity();

  constructor(public navCtrl: NavController,
    private _userService: UserService,
    private _securityService: SecurityService,
    private _LogService: LogService) {
  }

  ngOnInit() {
    this.loadStaySession();
  }

  loadStaySession() {
    if (this._securityService.loadStaySession()) {
      this.userSessionEntity = this._securityService.getInitialConfigSession();
    }
  }

  login() {
    if (!Utils.IsEmpty(this.userSessionEntity.UserName) && !Utils.IsEmpty(this.userSessionEntity.Password)) {
      this._userService.login(this.userSessionEntity)
        .subscribe(
        res => {
          console.log(res);
          this._securityService.setInitialConfigSession(res);
          this.navCtrl.setRoot(HomePage);
        },
        error => {
          this._LogService._LogError(error);
          this._LogService._ShowFlareFromErrorResult(Enum.TOAST_POSITION.bottom, error, 3000, "Usuario o clave incorrecta");
        },
        () => console.log("FINISHED LOGIN"));
    }
    else {
      this._LogService._ShowFlare(Enum.TOAST_POSITION.bottom, "Por favor rellene su usuario y contraseña para acceder a la aplicacion", 3000);
    }
  }

  goToForgetPassword() {
    this.navCtrl.push(ForgetPasswordPage);
  }
}