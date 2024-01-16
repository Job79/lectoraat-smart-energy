import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
  public generateSecureRandomString(length: number) {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return Array.from(crypto.getRandomValues(new Uint32Array(length)))
      .map((x) => characters[x % characters.length])
      .join('');
  }
}
