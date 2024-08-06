import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonThingsService {
  constructor() {}

  //! se usa como referencia lo documentado en npm install secure-web-storage

  private SECRET_KEY = environment.SECRET_KEY;

  setItem(key: string, value: any): void {
    const hashedKey = this.hash(key);
    const stringValue = JSON.stringify(value);
    const encryptedValue = this.encrypt(stringValue);
    sessionStorage.setItem(hashedKey, encryptedValue);
  }

  getItem(key: string): any {
    const hashedKey = this.hash(key);
    const encryptedValue = sessionStorage.getItem(hashedKey);
    if (encryptedValue) {
      const decryptedValue = this.decrypt(encryptedValue);
      return JSON.parse(decryptedValue);
    }
    return null;
  }

  private hash(key: string): string {
    return CryptoJS.HmacSHA256(key, this.SECRET_KEY).toString();
  }

  private encrypt(data: string): string {
    const encryptedData = CryptoJS.AES.encrypt(
      data,
      this.SECRET_KEY
    ).toString();
    return encryptedData;
  }

  private decrypt(data: string): string {
    const bytes = CryptoJS.AES.decrypt(data, this.SECRET_KEY);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
  }
}
