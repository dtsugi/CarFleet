import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'home.html'  
})
export class HomePage {
  url: string;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
  }

}