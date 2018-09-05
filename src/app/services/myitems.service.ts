import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Config } from '../Configuration/config';
import { CookieService } from 'ngx-cookie-service';
import { Items } from '../model/items';
import { Customerorder } from '../model/customerorder';
import { Store } from '../model/store';

@Injectable()
export class MyitemsService {

  httpOptions: any;
  httpHeaders: any;
  storeId:any;
  constructor(private http:HttpClient,private cookie: CookieService) { 
    this.setHeaders('','');
  }
  setHeaders(key, value) {
    var authToken = this.cookie.get('token');
    var loginId=this.cookie.get('loginId');
    var storeId=this.cookie.get('storeId');
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json'),
    this.httpHeaders = this.httpHeaders.append('token', authToken);
    this.httpHeaders = this.httpHeaders.append('loginId',  loginId );
    this.httpHeaders = this.httpHeaders.append('storeId',  storeId );
    
    
    if (key != '' || value != '') {
      this.httpHeaders = this.httpHeaders.append(key, value);
    }
    this.httpOptions = {
      headers: this.httpHeaders
    };

  }
  createStoreItem(value){
    return this.http.post(Config.itemsUrl.concat('storeItems'),value,this.httpOptions);
  }

  listAllMyItems(){
      this.setHeaders('','');
      return this.http.get<Items[]>(Config.itemsUrl.concat('listAllStoreItems'),this.httpOptions);
    }

    listAllAvaliableOrderByStore(){
      this.setHeaders('','');
      return this.http.get<Customerorder[]>(Config.orderUrl.concat('listAllAvaliableOrderByStore'),this.httpOptions);
    }

    listAllDeliverOrderByStore(){
      this.setHeaders('','');
      return this.http.get<Customerorder[]>(Config.orderUrl.concat('deliverOrderByStore'),this.httpOptions);
    }

    deleteOrder(id){
      this.setHeaders('','');
      return this.http.delete(Config.orderUrl.concat(id),this.httpOptions)
  
    }

    listAnStore(){
      this.setHeaders('','');
      return this.http.get<Store>(Config.storeUrl.concat(this.storeId),this.httpOptions)
    }

    editStore(value){
      this.setHeaders('','');
      return this.http.put(Config.storeUrl.concat("storeEdit"),value,this.httpOptions);
    }
}
