import {Injectable} from "@angular/core";
import {CryptoConstants} from "../constants/crypto.constants";
import asmCrypto from "asmcrypto.js"

@Injectable()
export class CryptoService{

  private aesKey: any;

  private salt: string;
  private iterations: number;
  private nonceLen: number;

  constructor(){
    this.salt = CryptoConstants.SECRET_SALT;
    this.iterations = 4096;
    this.nonceLen = 12;
    this.deriveAesKey(CryptoConstants.SECRET_KEY);
  }

  private deriveAesKey(password: string) {
    this.aesKey = asmCrypto.PBKDF2_HMAC_SHA256.bytes(password, this.salt, this.iterations, 32);
  }


  private joinNonceAndData(nonce: Uint8Array, data: Uint8Array) {
    const buf = new Uint8Array(nonce.length + data.length);
    nonce.forEach((byte, i) => buf[i] = byte);
    data.forEach((byte, i) => buf[i + nonce.length] = byte);
    return buf;
  }

  private separateNonceFromData(buf: Uint8Array) {
    const nonce = new Uint8Array(this.nonceLen);
    const data = new Uint8Array(buf.length - this.nonceLen);
    buf.forEach((byte, i) => {
      if (i < this.nonceLen) {
        nonce[i] = byte;
      } else {
        data[i - this.nonceLen] = byte;
      }
    });
    return {nonce, data};
  }

  public encrypt(value): Uint8Array{
    const nonce = new Uint8Array(this.nonceLen);
    asmCrypto.getRandomValues(nonce);
    const encrypted = asmCrypto.AES_GCM.encrypt(JSON.stringify(value), this.aesKey, nonce);

    return this.joinNonceAndData(nonce, new Uint8Array(encrypted));
  }

  public decrypt(value: Uint8Array): any{
    const parts = this.separateNonceFromData(value);
    const decrypted = asmCrypto.AES_GCM.decrypt(parts.data, this.aesKey, parts.nonce);

    return JSON.parse(asmCrypto.bytes_to_string(decrypted));
  }


}
