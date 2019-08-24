import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {
  protected URL = 'https://alpha.moxi-dev.com/moxi/';
  constructor() { }

  /**
   * This returns the API URL
   *
   * @returns
   * @memberof HttpBaseService
   */
  getURL() {
    return this.URL;
  }

  /**
   * This returns the Autorization Headers
   *
   * @memberof HttpBaseService
   */
  getHttpHeaders() {
    return null
  }
}
