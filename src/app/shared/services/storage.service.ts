import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";
import {Observable} from "rxjs";
import {CryptoService} from "./crypto.service";

@Injectable()
export class StorageService {


  constructor(public ionicStorage: Storage, public cryptoService: CryptoService){
  }

  protected encryptBeforeSet(value){
    return this.cryptoService.encrypt(value);
  }

  protected decryptAfterGet(value){
    return this.cryptoService.decrypt(value);
  }

  public get(key: string): Observable<any> {
    return Observable.fromPromise(this.ionicStorage.get(key));
  }

  public set(key: string, value: any): Observable<any> {
    return Observable.fromPromise(this.ionicStorage.set(key, value));
  }

  public remove(key: string): Observable<any> {
    return Observable.fromPromise(this.ionicStorage.remove(key));
  }

  public clear(): Observable<any> {
    return Observable.fromPromise(this.ionicStorage.clear());
  }

  public keys(): Observable<any> {
    return Observable.fromPromise(this.ionicStorage.keys());
  }

  public length(): Observable<any> {
    return Observable.fromPromise(this.ionicStorage.length());
  }

  public forEach(iteratorCallback: any): Observable<any> {
    return Observable.fromPromise(this.ionicStorage.forEach(iteratorCallback));
  }
}
