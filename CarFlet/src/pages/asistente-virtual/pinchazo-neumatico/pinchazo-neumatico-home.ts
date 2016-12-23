import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DocumentacionPinchazoHomePage } from './documentacion-home';
import { EnlacesPinchazoHomePage } from './enlaces-home';

@Component({
    templateUrl: 'pinchazo-neumatico-home.html'
})
export class PinchazoNeumaticoHomePage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    goToDocumentacionMovil() {
        this.navCtrl.push(DocumentacionPinchazoHomePage);
    }

    goToEnlaces() {
        this.navCtrl.push(EnlacesPinchazoHomePage);
    }
}
