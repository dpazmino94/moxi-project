import { LOGIN_CONSTANTS } from './../constants/constants';
import { HttpBaseService } from './http-base.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DealerUserModel } from '../Models/DealerUserModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends HttpBaseService{

  constructor(private http: HttpClient) { 
    super();
  }

  /**
   * Login API Service
   *
   * @param {DealerUserModel} dealerUserModel
   * @returns {Promise<any>}
   * @memberof LoginService
   */
  login(dealerUserModel: DealerUserModel): Promise<any> {
    return this.http.post(this.getURL() + LOGIN_CONSTANTS.API_URL, dealerUserModel).toPromise()
  }
}
