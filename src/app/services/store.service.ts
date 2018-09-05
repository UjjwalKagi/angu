import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Store } from '../model/store';
import { Config } from '../Configuration/config';

@Injectable()
export class StoreService {

  httpOptions: any;
  httpHeaders: any;
  constructor(private _http: HttpClient,private cookie: CookieService) { 
    this.setHeaders('','')
  }

  setHeaders(key, value) {
    var authToken = this.cookie.get('token');
    var loginId=this.cookie.get('loginId');
    var userId=this.cookie.get('userId');
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json'),
    this.httpHeaders = this.httpHeaders.append('token', authToken);
    this.httpHeaders = this.httpHeaders.append('loginId',  loginId );
    this.httpHeaders = this.httpHeaders.append('userId', userId );
    if (key != '' || value != '') {
      this.httpHeaders = this.httpHeaders.append(key, value);
    }
    this.httpOptions = {
      headers: this.httpHeaders
    };

  }

  listAllStore(){
    this.setHeaders('','')
    return this._http.get<Store[]>(Config.storeUrl,this.httpOptions);
  }

  createStore(value){
    return this._http.post(Config.storeUrl,value,this.httpOptions);
  }

  deleteStore(id){
    this.setHeaders('','');
    return this._http.delete(Config.storeUrl.concat(id),this.httpOptions)

  }

  

}
