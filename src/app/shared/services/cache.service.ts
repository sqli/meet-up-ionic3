import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";
import {Observable} from "rxjs";
import {Cacheable} from "./cacheable.interface";
import {StorageService} from "./storage.service";
import {SharedModule} from "../shared.module";
import {SharedService} from "./shared.service";
import {CryptoService} from "./crypto.service";

@Injectable()
export class CacheService extends StorageService{

  private ttl: number;

  constructor(public ionicStorage: Storage, public cryptoService: CryptoService, public sharedService: SharedService){
    super(ionicStorage, cryptoService);
    this.ttl = 10000;
  }

  public setTtl(ttl: number) {
    this.ttl = ttl;
  }

  public get(key: string): Observable<any> {
    let valueDecrypted = null;
    if(this.sharedService.isConnected){
      return new Observable(observer => {
        Observable.fromPromise(this.ionicStorage.get(key)).subscribe(
          cacheableValue => {
            if (cacheableValue && cacheableValue.timestamp) {
              let dateNow:number = Date.now();
              if ((dateNow - cacheableValue.timestamp) < this.ttl) {
                valueDecrypted = super.decryptAfterGet(cacheableValue.value);
                observer.next(valueDecrypted);
              } else {
                observer.next(null);
              }
            } else {
              observer.next(null);
            }
            observer.complete();
          }, error => {
            console.error("Une erreur est survenue lors de la lecture du cache pour la clé " + key + ". Erreur: " + error);
            observer.next(null);
            observer.complete();
          }
        )});
    }
    else{
      return new Observable(observer => {
        super.get(key).subscribe(
          result => {
            let valueDecrypted = null;
            if(result){
              valueDecrypted = super.decryptAfterGet(result.value);
              observer.next(valueDecrypted);
            }
            else{
              observer.error();
            }
            observer.complete();
          },
          error => {
            observer.error(error);
            observer.complete();
          }
        );
      });
    }
  }

  public set(key: string, value: any): Observable<any> {
    let cacheableValue: Cacheable = {
      timestamp: Date.now(),
      value: super.encryptBeforeSet(value)
    };
    return Observable.fromPromise(this.ionicStorage.set(key, cacheableValue));
  }

}
