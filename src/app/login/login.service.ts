import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Api} from "../../providers/api";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class LoginService {
  _user: any;

  constructor(public http: Http, public api: Api) {
  }

  login(accountInfo: any) {
    let body = `login=${accountInfo.username}&password=${accountInfo.password}`;
    return this.api.post('login', body);
  }

  logout() {
    this._user = null;
  }

  _loggedIn(resp) {
    this._user = resp.user;
  }
}
