import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ForgetPasswordPage } from '../pages/login/forget-password';

import { AsistenteVirtualHomePage } from '../pages/asistente-virtual/asistente-virtual-home';

import { PrimerosAuxiliosHomePage } from '../pages/asistente-virtual/primeros-auxilios/primeros-auxilios-home';
import { DocumentacionHomePage } from '../pages/asistente-virtual/primeros-auxilios/documentacion-home';
import { EnlacesHomePage } from '../pages/asistente-virtual/primeros-auxilios/enlaces-home';

import { PinchazoNeumaticoHomePage } from '../pages/asistente-virtual/pinchazo-neumatico/pinchazo-neumatico-home';
import { DocumentacionPinchazoHomePage } from '../pages/asistente-virtual/pinchazo-neumatico/documentacion-home';
import { EnlacesPinchazoHomePage } from '../pages/asistente-virtual/pinchazo-neumatico/enlaces-home';

import { AsistenciaConductorPage } from '../pages/asistente-virtual/asistencia-conductor/asistencia-conductor';
import { SlidesAsistenciaPage } from '../pages/asistente-virtual/asistencia-conductor/slides-asistencia/slides-asistencia';


import { HabitosConduccionHomePage } from '../pages/habitos-conduccion/habitos-conduccion-home';
import { CalculosConsumosPage } from '../pages/habitos-conduccion/calculos-consumos/calculos-consumos';
import { LugaresFrecuentadosPage } from '../pages/habitos-conduccion/lugares-frecuentados/lugares-frecuentados';
import { AceleracionesFrenadasPage } from '../pages/habitos-conduccion/aceleraciones-frenadas/aceleraciones-frenadas';


import { OtrosHomePage } from '../pages/otros/otros-home';
import { DriverListPage } from '../pages/otros/driver/driver-list';
import { DriverViewPage } from '../pages/otros/driver/driver-view';
import { VehicleListPage } from '../pages/otros/vehicle/vehicle-list';
import { VehicleViewPage } from '../pages/otros/vehicle/vehicle-view';
import { FleetListPage } from '../pages/otros/fleet/fleet-list';
import { FleetVehicleListPage } from '../pages/otros/fleet/fleet-vehicle-list';
import { MaintenanceListPage } from '../pages/otros/maintenance/maintenance-list';


import { ConfigHomePage } from '../pages/config/config-home';
import { IdiomaListPage } from '../pages/config/idioma/idioma-list';
import { TagListPage } from '../pages/config/tags/tags-list';
import { TagInsertPage } from '../pages/config/tags/tags-insert';
import { TagsLanguageListPage } from '../pages/config/tags-language/tags-language-list';
import { TagsLanguageViewPage } from '../pages/config/tags-language/tags-language-view';
import { TagsLanguageEditPage } from '../pages/config/tags-language/tags-language-edit';
import { UserInfoViewPage } from '../pages/config/user-info/user-info-view';

import { LogoutPage } from '../pages/logout/logout';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ListPage,
    HomePage,
    LoginPage,
    ForgetPasswordPage,
    AsistenteVirtualHomePage,
    PrimerosAuxiliosHomePage,
    DocumentacionHomePage,
    EnlacesHomePage,
    PinchazoNeumaticoHomePage,
    DocumentacionPinchazoHomePage,
    EnlacesPinchazoHomePage,
    AsistenciaConductorPage,
    SlidesAsistenciaPage,
    HabitosConduccionHomePage,
    CalculosConsumosPage,
    LugaresFrecuentadosPage,
    AceleracionesFrenadasPage,
    OtrosHomePage,
    DriverListPage,
    DriverViewPage,
    VehicleListPage,
    VehicleViewPage,
    FleetListPage,
    FleetVehicleListPage,
    MaintenanceListPage,
    ConfigHomePage,
    IdiomaListPage,
    TagListPage,
    TagInsertPage,
    TagsLanguageListPage,
    TagsLanguageViewPage,
    TagsLanguageEditPage,
    UserInfoViewPage,
    LogoutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ListPage,
    HomePage,
    LoginPage,
    ForgetPasswordPage,
    AsistenteVirtualHomePage,
    PrimerosAuxiliosHomePage,
    DocumentacionHomePage,
    EnlacesHomePage,
    PinchazoNeumaticoHomePage,
    DocumentacionPinchazoHomePage,
    EnlacesPinchazoHomePage,
    AsistenciaConductorPage,
    SlidesAsistenciaPage,
    HabitosConduccionHomePage,
    CalculosConsumosPage,
    LugaresFrecuentadosPage,
    AceleracionesFrenadasPage,
    OtrosHomePage,
    DriverListPage,
    DriverViewPage,
    VehicleListPage,
    VehicleViewPage,
    FleetListPage,
    FleetVehicleListPage,
    MaintenanceListPage,
    ConfigHomePage,
    IdiomaListPage,
    TagListPage,
    TagInsertPage,
    TagsLanguageListPage,
    TagsLanguageViewPage,
    TagsLanguageEditPage,
    UserInfoViewPage,
    LogoutPage
  ],
  providers: []
})
export class AppModule { }
