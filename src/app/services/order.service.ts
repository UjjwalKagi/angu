import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Config } from '../Configuration/config';
import { CookieService } from 'ngx-cookie-service';
import { Order } from '../model/order';
import { Customerorder } from '../model/customerorder';
@Injectable()
export class OrderService {
  httpOptions: any;
  httpHeaders: any;
  constructor(private _http: HttpClient,private cookie: CookieService) { 
    this.setHeaders('','')
  }

  setHeaders(key, value) {
    var authToken = this.cookie.get('token');
    var loginId=this.cookie.get('loginId');
    var customerId=this.cookie.get('customerId');
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json'),
    this.httpHeaders = this.httpHeaders.append('token', authToken);
    this.httpHeaders = this.httpHeaders.append('loginId',  loginId );
    this.httpHeaders = this.httpHeaders.append('customerId', customerId );
    if (key != '' || value != '') {
      this.httpHeaders = this.httpHeaders.append(key, value);
    }
    this.httpOptions = {
      headers: this.httpHeaders
    };

  }

   saveOrder(value){
    this.setHeaders('','')
    console.log(value);
    return this._http.post(Config.orderUrl,value,this.httpOptions,)
  }

  listAllCustomerOrder(){
    this.setHeaders('','')
    return this._http.get<Order[]>(Config.orderUrl.concat('listAllCustomerOrder'),this.httpOptions);
  }

  

  listAvaliableOrder(){
    this.setHeaders('','');
    return this._http.get<Customerorder[]>(Config.orderUrl.concat('listAllOrderAvaliable'),this.httpOptions);

  }

  listAllDeliverOrder(){
    this.setHeaders('','');
    return this._http.get<Customerorder[]>(Config.orderUrl.concat('listAllOrderDeliver'),this.httpOptions);

  }

  deleteOrder(id){
    this.setHeaders('','');
    return this._http.delete(Config.orderUrl.concat(id),this.httpOptions)

  }


  searchOrderAvaliable(value){
    console.log(value);
    this.setHeaders('','');
    return this._http.post(Config.orderUrl.concat("searchAvalibleByDate"),value,this.httpOptions,);
  }

  searchOrderDeliveral(value){
    console.log(value);
    this.setHeaders('','');
    return this._http.post(Config.orderUrl.concat("searchDeliverByDate"),value,this.httpOptions,);
  }

}
