import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse ,HttpHeaders} from '@angular/common/http';
import { Items } from '../model/items';
import { Config } from '../Configuration/config';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { Order } from '../model/order';


@Injectable()
export class HomeService {

  httpOptions: any;
  httpHeaders: any;
  constructor(private _http: HttpClient,private cookie: CookieService) { 
    this.setHeaders('','')
  }

  setHeaders(key, value) {
    var token = this.cookie.get('token');
    var loginId=this.cookie.get('loginId');
    var customerId=this.cookie.get('customerId');
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json'),
    this.httpHeaders = this.httpHeaders.append('token',   token);
    this.httpHeaders = this.httpHeaders.append('loginId',  loginId );
    this.httpHeaders = this.httpHeaders.append('customerId',  customerId );
    
    if (key != '' || value != '') {
      this.httpHeaders = this.httpHeaders.append(key, value);
    }
    this.httpOptions = {
      headers: this.httpHeaders
    };

  }

    listProduct(){
      return this._http.get<Items[]>(Config.itemsUrl.concat('listAll'));
    }


    getDistance(value){
      this.setHeaders('','');
      return this._http.post(Config.storeUrl.concat('getStore'),value,this.httpOptions)
    }

    seePrice(storeId){
      this.setHeaders('','');
      return this._http.get<Order[]>(Config.itemsUrl.concat("/listByStoreId/").concat(storeId),this.httpOptions)
    }



    
    
}
