
import { Component } from '@angular/core';
import { App, NavController, ToastController } from 'ionic-angular';
import { UserService } from '../../services/user.service';
import { HomePage } from '../home/home';
import { Utils, ConstantsConfig, Enum } from '../../app/utils';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
  providers: [UserService]
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private _userService: UserService) {
  }

  ngOnInit() {
  }

  login() {
    if (!Utils.IsEmpty(this.username) && !Utils.IsEmpty(this.password)) {
      this._userService.login(this.username)
        .subscribe(
        res => {
          console.log(res);
          localStorage.setItem(ConstantsConfig.USER_ID_LS, res.Id);
          localStorage.setItem(ConstantsConfig.USER_COMPANY_ID_LS, res.Id_company);
          localStorage.setItem(ConstantsConfig.USER_LANGUAGE_ID_LS, res.Id_language);
          this.navCtrl.setRoot(HomePage);
        },
        error => {
          console.log(error);
          localStorage.setItem(ConstantsConfig.USER_ID_LS,"4188" );
          localStorage.setItem(ConstantsConfig.USER_COMPANY_ID_LS, "2099");
          localStorage.setItem(ConstantsConfig.USER_LANGUAGE_ID_LS, "3");
          this.navCtrl.setRoot(HomePage);
          this.showToast(Enum.TOAST_POSITION.bottom, "Usuario o clave incorrecta", 3000);
        },
        () => console.log("FINISHED LOGIN"));
    }
    else {
      this.showToast(Enum.TOAST_POSITION.bottom, "Por favor rellene su usuario y contraseña para acceder a la aplicacion", 3000);
    }
    // localStorage.setItem(COMPANY_ID_LS, this.companySelected);
    // console.log(localStorage.getItem(COMPANY_ID_LS));
    // this.navCtrl.setRoot(HomePage);
  }

  showToast(position: string, message: string, duration: number) {
    Utils.ShowToast(this.toastCtrl, position, message, duration);
    // let toast = this.toastCtrl.create({
    //   message: message,
    //   duration: duration,
    //   position: position
    // });
    // toast.present(toast);
  }

}