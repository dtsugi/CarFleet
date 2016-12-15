import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DocumentacionHomePage } from './documentacion-home';
import { EnlacesHomePage } from './enlaces-home';

@Component({
    templateUrl: 'primeros-auxilios-home.html'
})
export class PrimerosAuxiliosHomePage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    goToDocumentacionMovil() {
        this.navCtrl.push(DocumentacionHomePage);
    }

    goToEnlaces() {
        this.navCtrl.push(EnlacesHomePage);
    }
}
