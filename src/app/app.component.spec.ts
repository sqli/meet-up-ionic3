import {async, TestBed} from "@angular/core/testing";
import {IonicModule} from "ionic-angular";

import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";

import {MyApp} from "./app.component";
import {Api} from "../providers/api";
import {SharedService} from "./shared/services/shared.service";
import {CryptoService} from "./shared/services/crypto.service";
import {CacheService} from "./shared/services/cache.service";
import {BaseRequestOptions, Http} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {IonicStorageModule} from "@ionic/storage";

describe('MyApp Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot({
          name: 'starterkit-storage',
          driverOrder: ['indexeddb', 'sqlite', 'websql']
        })
      ],
      providers: [
        StatusBar,
        SplashScreen,
        Api,
        CacheService,
        CryptoService,
        SharedService,
        BaseRequestOptions,
        MockBackend,
        Http,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions],
        }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof MyApp).toBe(true);
  });

});
