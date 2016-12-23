import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SlidesAsistenciaPage } from './slides-asistencia/slides-asistencia';

@Component({
    templateUrl: 'asistencia-conductor.html'
})

export class AsistenciaConductorPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    tappedMenu(slideSelected) {
        console.log("slideSelected" + slideSelected);
        this.navCtrl.push(SlidesAsistenciaPage, { slideSelected: slideSelected });
    }
}

