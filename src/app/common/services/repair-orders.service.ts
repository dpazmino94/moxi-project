import { HttpBaseService } from './http-base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { extend } from 'webdriver-js-extender';

@Injectable({
  providedIn: 'root'
})
export class RepairOrdersService extends HttpBaseService{

  constructor(private http: HttpClient) { 
    super();
  }

  getRepairOrders(customOrder: string, htttpOptions): Promise<any>  {
    return this.http.get(this.getURL() + 'service/repairorders/' + customOrder, htttpOptions).toPromise();
  }

  startRepairOrder(orderNumber: number, htttpOptions): Promise<any>  {
    return this.http.post(this.getURL() + 'service/repairorder/' + orderNumber + '/start', null, htttpOptions).toPromise();
  }
}
