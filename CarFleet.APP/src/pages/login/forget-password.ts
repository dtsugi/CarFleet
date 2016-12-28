
import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { UserService } from '../../services/user.service';
import { UserRestoreService } from '../../services/user.restore.service';
import { SecurityService } from '../../services/security.service';
import { LogService } from '../../services/log.service';
import { Utils, ConstantsConfig, Enum } from '../../app/utils';
import { LoginPage } from './login';

@Component({
    templateUrl: 'forget-password.html',
    providers: [UserService, UserRestoreService, SecurityService, LogService]
})
export class ForgetPasswordPage {
    viewRestorePassword: boolean = false;
    viewVerify: boolean = false;
    viewUpdatePass: boolean = false;
    email: string = "";
    code: string = "";
    newPassword: string = "";
    newPasswordConfirm: string = "";

    constructor(public navCtrl: NavController,
        private _userService: UserService,
        private _userRestoreService: UserRestoreService,
        private _securityService: SecurityService,
        private _LogService: LogService) {
    }

    ngOnInit() {
        this.setCurrentView(true, false, false);
    }

    restorePassword() {
        if (!Utils.IsEmpty(this.email)) {
            this._userRestoreService.restorePassword(this.email)
                .subscribe(
                res => {
                    console.log(res);
                    this.setCurrentView(false, true, false);
                    this._LogService._ShowFlare(Enum.TOAST_POSITION.bottom, "Ayuda en camino..... Su codigo de verificacion se genero satisfactoriamente", 3000);
                },
                error => {
                    this._LogService._LogError(error);
                    this._LogService._ShowFlareFromErrorResult(Enum.TOAST_POSITION.bottom, error, 3000, ConstantsConfig.ERR_GNR_APP);
                },
                () => console.log("FINISHED RESTOE PASS"));
        }
        else {
            this._LogService._ShowFlare(Enum.TOAST_POSITION.bottom, "Por favor rellene el campo correo electronico", 3000);
        }
    }

    verifyRestoreCode() {
        if (!Utils.IsEmpty(this.email) && !Utils.IsEmpty(this.code)) {
            this._userRestoreService.verifyRestoreCode(this.email, this.code)
                .subscribe(
                res => {
                    console.log(res);
                    this.setCurrentView(false, false, true);
                },
                error => {
                    this._LogService._LogError(error);
                    this._LogService._ShowFlareFromErrorResult(Enum.TOAST_POSITION.bottom, error, 3000, ConstantsConfig.ERR_GNR_APP);
                },
                () => console.log("FINISHED VERIFY RESTORE CODE"));
        }
        else {
            this._LogService._ShowFlare(Enum.TOAST_POSITION.bottom, "Por favor rellene el campo correo electronico y codigo de verificacion", 3000);
        }
    }

    updatePassword() {
        if (!Utils.IsEmpty(this.newPassword) && !Utils.IsEmpty(this.newPasswordConfirm)) {
            if (this.newPassword === this.newPasswordConfirm) {
                this._userRestoreService.updatePassword(this.email, this.code, this.newPassword)
                    .subscribe(
                    res => {
                        console.log(res);
                        this._LogService._ShowFlare(Enum.TOAST_POSITION.bottom, "Su contraseña se ha actualizado correctamente", 3000);
                        this.navCtrl.setRoot(LoginPage);
                    },
                    error => {
                        this._LogService._LogError(error);
                        this._LogService._ShowFlareFromErrorResult(Enum.TOAST_POSITION.bottom, error, 3000, ConstantsConfig.ERR_GNR_APP);
                    },
                    () => console.log("FINISHED UPDATE PASS"));
            }
            else {
                this._LogService._ShowFlare(Enum.TOAST_POSITION.bottom, "Las contraseñas deben ser iguales", 3000);
            }
        }
        else {
            this._LogService._ShowFlare(Enum.TOAST_POSITION.bottom, "Por favor rellene los campos contraseña", 3000);
        }
    }

    clk_viewRestore() {
        this.setCurrentView(true, false, false);
    }

    clk_viewVerify() {
        this.setCurrentView(false, true, false);
    }

    setCurrentView(viewRestorePassword, viewVerify, viewUpdatePass) {
        this.viewRestorePassword = viewRestorePassword;
        this.viewVerify = viewVerify;
        this.viewUpdatePass = viewUpdatePass;
    }
}