import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Config } from '../Configuration/config';

@Injectable()
export class ChangePasswordService {

  httpOptions: any;
  httpHeaders: any;
  constructor(private http:HttpClient,private cookie: CookieService) { 
    this.setHeaders('','')
  }

  setHeaders(key, value) {
    var authToken = this.cookie.get('token');
    var loginId=this.cookie.get('loginId');
    var userId=this.cookie.get('userId');
    var storeId=this.cookie.get('storeId');
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json'),
    this.httpHeaders = this.httpHeaders.append('token', authToken);
    this.httpHeaders = this.httpHeaders.append('loginId',  loginId );
    this.httpHeaders = this.httpHeaders.append('userId',  userId );
    this.httpHeaders = this.httpHeaders.append('storeId',  storeId );
    
    if (key != '' || value != '') {
      this.httpHeaders = this.httpHeaders.append(key, value);
    }
    this.httpOptions = {
      headers: this.httpHeaders
    };

  }
  changeUserPassword(value){
    this.setHeaders('','');
    return this.http.put(Config.userApiUrl.concat('changePassword'),value,this.httpOptions);
  } 

  changeStorePassword(value){
    this.setHeaders('','');
    return this.http.put(Config.storeUrl.concat('changePassword'),value,this.httpOptions);
  } 

}

