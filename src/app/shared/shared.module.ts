import {NgModule} from "@angular/core";
import {JsonKeysPipe} from "./pipes/jsonKeys.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";

import {IonicModule} from "ionic-angular";
import {TranslateModule} from "ng2-translate";
import {Ng2BootstrapModule} from "ngx-bootstrap";
import {MomentPipe} from "./pipes/moment.pipe";
import {StorageService} from "./services/storage.service";

import {CacheService} from "./services/cache.service";
import {SharedService} from "./services/shared.service";
import {CryptoService} from "./services/crypto.service";

import {Keyboard} from "@ionic-native/keyboard";
import {SearchGroup} from "./components/searchgroup/searchgroup.component.template";

@NgModule({
  declarations: [
    JsonKeysPipe,
    MomentPipe,
    SearchGroup
  ],
  imports: [ // Import des modules angular 2
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),
    IonicModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    Ng2BootstrapModule,
    TranslateModule,
    JsonKeysPipe,
    MomentPipe,
    SearchGroup
  ],
  providers: [
    StorageService,
    CacheService,
    SharedService,
    CryptoService,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    Ng2BootstrapModule,
    TranslateModule,
    JsonKeysPipe,
    MomentPipe,
    Keyboard,
  ]
})
export class SharedModule {


}
