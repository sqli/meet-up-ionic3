import {TestBed, inject} from "@angular/core/testing";
import {CryptoService} from "./crypto.service";

describe('Test CryptoService : ', () => {

  let cryptoService: CryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CryptoService
      ],
    });
  });

  beforeEach(inject([CryptoService], (injectedCryptoService: CryptoService) => {
    cryptoService = injectedCryptoService;
  }));

  it('should encrypt/decrypt AES', function (done) {
    let toEncrypt = {
      testField1: "testField1",
      testField2: "testField2",
      testField3: "testField3"
    };

    let resultIntoAes: Uint8Array = cryptoService.encrypt(toEncrypt);
    let resultFromAes = cryptoService.decrypt(resultIntoAes);

    expect(toEncrypt).toEqual(resultFromAes);
    done();


  });
});

