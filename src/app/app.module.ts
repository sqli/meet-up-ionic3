import {NgModule, ErrorHandler} from "@angular/core";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IonicApp, IonicModule, IonicErrorHandler} from "ionic-angular";
import {MyApp} from "./app.component";
import {LoginPage} from "./login/login.page";
import {Api} from "../providers/api";
import {GestionParcModule} from "./modules/gestionParcModule/gestionParc.module";
import {LoginService} from "./login/login.service";
import { APP_BASE_HREF } from '@angular/common';
import {WebWorkerService} from "./webworker/web-worker.service";
import {BrowserModule} from "@angular/platform-browser";
import {IonicStorageModule} from "@ionic/storage";
import {ConfigService} from "./login/config.service";
import {SharedModule} from "./shared/shared.module";


export function providers() {
  return [
    StatusBar,
    SplashScreen,
    LoginService,
    ConfigService,
    WebWorkerService,
    Api,
    // Keep this to enable Ionic's runtime error handling during development
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: APP_BASE_HREF, useValue: '/'},
  ];
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: false
    }),
    IonicStorageModule.forRoot({
      name: 'starterkit-storage',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    SharedModule
  ],
  entryComponents: [
    MyApp,
    LoginPage,
  ],
  bootstrap: [IonicApp],
  providers: providers()
})
export class AppModule {
}
