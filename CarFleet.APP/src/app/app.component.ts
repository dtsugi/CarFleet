import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import { PageMenu } from '../models/PageMenu';
import './rxjs-operators';
// Pages 
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { AsistenteVirtualHomePage } from '../pages/asistente-virtual/asistente-virtual-home';
import { HabitosConduccionHomePage } from '../pages/habitos-conduccion/habitos-conduccion-home';
import { OtrosHomePage } from '../pages/otros/otros-home';
import { ConfigHomePage } from '../pages/config/config-home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  // rootPage: any = LoginPage;
  rootPage: any = LoginPage;
  pages: Array<PageMenu>;
  tagsList = [];

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    console.log("INIT MENU");
    this.initializeApp();
    this.pages = [];
    // set our app's pages
    this.pages.push(new PageMenu('Mi compañia', OtrosHomePage, 'home'));
    this.pages.push(new PageMenu('Asistente Virtual', AsistenteVirtualHomePage, 'ionitron'));
    this.pages.push(new PageMenu('Hábitos de conduccion', HabitosConduccionHomePage, "car"));
    this.pages.push(new PageMenu('Diagnosis y averias', null, 'construct'));
    this.pages.push(new PageMenu('GPS', null, 'locate'));
    this.pages.push(new PageMenu('Gestion de la documentacion', null, 'document'));
    this.pages.push(new PageMenu('Multas', null, 'card'));
    this.pages.push(new PageMenu('Panel de conduccion en tiempo real', null, 'speedometer'));
    this.pages.push(new PageMenu('Configuracion', ConfigHomePage, 'more'));
    this.pages.push(new PageMenu('Cerrar sesion', LoginPage, 'log-out'));
    // this.pages.push(new PageMenu('Otros', OtrosHomePage, 'more'));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.Component);
  }
}
