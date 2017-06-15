import {Component} from "@angular/core";
import {NavController, ToastController} from "ionic-angular";
import {LoginService} from "./login.service";
import {CacheConstants} from "../shared/constants/caches.constants";
import {StorageService} from "../shared/services/storage.service";
import {ConfigService} from "./config.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public loginService: LoginService,
              public configService: ConfigService,
              public toastCtrl: ToastController,
              public storageService: StorageService) {

  }

  public getConfig() {
    this.configService.getConfig()
      .subscribe(
        data => {
          let dataToCache = JSON.stringify(data);
          if (dataToCache) {
            this.storageService.set(CacheConstants.CACHE_CONFIG, dataToCache);
            this.navCtrl.push("");
          }
          else {
            let toast = this.toastCtrl.create({
              message: 'Error to parse data',
              duration: 3000,
              position: 'top'
            });
            toast.present();
          }
        },
        error => {
          let toast = this.toastCtrl.create({
            message: error,
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }
      );
  }

  public doLogin(event, username, password) {
    event.preventDefault();

    let credential = {username: username, password: password};

    this.loginService.login(credential)
      .subscribe(
        data => {
          this.getConfig();
        },
        error => {
          let toast = this.toastCtrl.create({
            message: "Vous n'êtes pas autorisé",
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }
      );
  }

}
