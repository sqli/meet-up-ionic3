import {BoxDetail} from "../box/boxDetailPrm/boxDetailPrm.interface";
import {ResponseOptions, Response} from "@angular/http";
import {PrmData} from "./detailPrm.interface";

export class ConfigServiceSpecMock {

  constructor() {
  }


  public getExpectedConfigData() {
    return {"web.front.logLevel": "DEBUG"};
  };

  public getConfigData() {
    return new Response(new ResponseOptions({
      status: 200,
      body: {"web.front.logLevel": "DEBUG"}
    }));
  };

}
