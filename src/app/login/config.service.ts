import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Api} from "../../providers/api";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ConfigService {
  public endPointConfig: string = 'api/config';

  constructor(public http: Http, public api: Api) {
  }

  public getConfig() {
    return this.api.get(this.endPointConfig);
  }
}
