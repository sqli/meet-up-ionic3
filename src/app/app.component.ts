import {Component, ViewChild} from "@angular/core";
import {Platform, Nav, Config, NavController} from "ionic-angular";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FirstRunPage} from "./pages";

import {LoginPage} from "./login/login.page";

import {DetailPrmPage} from "./modules/gestionParcModule/prm/detailPrm/detailPrm.page";
import {SearchPrmPage} from "./modules/gestionParcModule/prm/searchPrm/searchPrm.page";
import {CataloguePage} from "./modules/gestionParcModule/catalogue/catalogue.page";
import {AppService} from "./app.service";

@Component({
  template: `<ion-split-pane when="xs">
    <ion-nav #content [root]="rootPage" main></ion-nav>
  </ion-split-pane>`
})
export class MyApp {


  public currentPage;

  @ViewChild(Nav) nav;

  rootPage = FirstRunPage;

  pages: any[] = [
    {title: 'Login', component: LoginPage},
  ];

  constructor(private platform: Platform, config: Config, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    // Set the default language for translation strings, and the current language.
    config.set('ios', 'backButtonText', "retour");

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public onPageChangeTrigger(page: string): void {
    this.nav.push(page);
  }

  ngAfterViewInit() {
    // When view has changed, update currentPage
    this.nav.viewDidLoad.subscribe((res) => {
      this.currentPage = res;
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
