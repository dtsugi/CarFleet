
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CompanyService } from '../../services/company.service';
import { HomePage } from '../home/home';
import { Utils, COMPANY_ID_LS } from '../../app/utils';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
  providers: [CompanyService]
})
export class LoginPage {

  companyList = [];
  companySelected;

  constructor(public navCtrl: NavController, private _companyService: CompanyService) {
  }

  ngOnInit() {
    this.initCompanyList();
  }

  initCompanyList() {
    this.companyList = this._companyService.get(null, null, null, null);
  }

  login() {
    console.log(this.companySelected);
    if (this.companySelected === undefined) {
      console.log("IS UNDEFINED");
      this.companySelected = null;
    }
    localStorage.setItem(COMPANY_ID_LS, this.companySelected);
    console.log(localStorage.getItem(COMPANY_ID_LS));
    this.navCtrl.setRoot(HomePage);
  }
}