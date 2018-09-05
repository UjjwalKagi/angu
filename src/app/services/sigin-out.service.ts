import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Config } from '../Configuration/config';
// import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class SiginOutService {

  httpOptions: any;
  httpHeaders: any;
  constructor(private http:HttpClient,private cookie: CookieService) {
    this.setHeaders('','')

   }

   setHeaders(key, value) {
    var authToken = this.cookie.get('token');
    var loginId=this.cookie.get('loginId');
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json'),
    this.httpHeaders = this.httpHeaders.append('token', authToken);
    this.httpHeaders = this.httpHeaders.append('loginId',  loginId );
    if (key != '' || value != '') {
      this.httpHeaders = this.httpHeaders.append(key, value);
    }
    this.httpOptions = {
      headers: this.httpHeaders
    };

  }
  logout(){
    this.setHeaders('','');
    return this.http.get(Config.loginUrl.concat('logout'),this.httpOptions);
  }

}
