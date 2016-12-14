import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AsistenteVirtualHomePage } from '../pages/asistente-virtual/asistente-virtual-home';
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

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    LoginPage,
    AsistenteVirtualHomePage,
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
    TagsLanguageEditPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HomePage,
    LoginPage,
    AsistenteVirtualHomePage,
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
    TagsLanguageEditPage
  ],
  providers: []
})
export class AppModule { }
