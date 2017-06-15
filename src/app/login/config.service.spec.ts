import {TestBed, inject} from "@angular/core/testing";
import {BaseRequestOptions, Http, RequestMethod} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {ConfigService} from "./config.service";
import {ConfigServiceSpecMock} from "./config.service.spec.mock";
import {Api} from "../../providers/api";

describe('Test Config service : ', () => {

  let dataService: ConfigServiceSpecMock;
  let configService: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Api,
        Http,
        ConfigService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions],
        }
      ],
      imports: [
      ]
    });

    dataService = new ConfigServiceSpecMock();
  });


  let isConfigConnection = function (connection: MockConnection) {
    return connection.request.url.endsWith('/api/config') && connection.request.method === RequestMethod.Get;
  };

  beforeEach(inject([MockBackend, ConfigService], (backend: MockBackend, injectedConfigService: ConfigService) => {
    configService = injectedConfigService;

    backend.connections.subscribe((connection: MockConnection) => {
      // wrap in timeout to simulate server api call
      setTimeout(() => {
        if (isConfigConnection(connection)) {
          connection.mockRespond(dataService.getConfigData());
        } else {
          connection.mockError(new Error("Mon erreur"));
        }
      }, 1);
    });
  }));

  it('should load applicative config', function(done) {
    configService.getConfig().subscribe(
      response => {
        expect(dataService.getExpectedConfigData()).toEqual(response);
        done();
      }
    );
  });

});
