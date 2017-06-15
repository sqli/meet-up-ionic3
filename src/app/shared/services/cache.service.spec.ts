import {TestBed, inject} from "@angular/core/testing";
import {IonicStorageModule} from "@ionic/storage";
import {CacheService} from "./cache.service";
import {CryptoService} from "./crypto.service";
import {SharedService} from "./shared.service";

describe('Test StorageService : ', () => {

  let cacheService: CacheService;
  let sharedService: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CacheService,
        CryptoService,
        SharedService
      ],
      imports: [
        IonicStorageModule.forRoot({
          name: 'starterkit-storage',
          driverOrder: ['indexeddb', 'sqlite', 'websql']
        })
      ]
    });
  });

  beforeEach(inject([CacheService, SharedService], (injectedStorageService: CacheService, injectedSharedService: SharedService) => {
    cacheService = injectedStorageService;
    sharedService = injectedSharedService;

    sharedService.isConnected = true;
  }));

  afterEach(function () {
    cacheService.setTtl(10000);
  });

  it('should set and get a value in Storage', function (done) {
    cacheService.clear().subscribe(
      onClear => {
        let objectToCache: string = "test";
        cacheService.set("testKey", objectToCache).subscribe(
          onSet =>{
            cacheService.get("testKey").subscribe(
              objectInCache => {
                expect(objectInCache).toEqual(objectToCache);
                done();
              }
            );
          }
        );
      }
    );
  });

  it('should set and not get a value because of ttl', function (done) {
    cacheService.setTtl(0);
    cacheService.clear().subscribe(
      onClear => {
        let objectToCache: string = "test";
        cacheService.set("testKey", objectToCache).subscribe(
          onSet =>{
            cacheService.get("testKey").subscribe(
              objectInCache => {
                expect(objectInCache).toBeNull();
                done();
              }
            );
          }
        );
      }
    );
  });
});

