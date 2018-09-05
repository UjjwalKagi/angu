import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Config } from '../Configuration/config';
import { Observable } from 'rxjs/observable';
import { User } from '../model/user';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class UserServiceService {

  httpOptions: any;
  httpHeaders: any;
  userId:any;
  constructor(private http:HttpClient,private cookie: CookieService) {
    this.setHeaders('','')
   }


  setHeaders(key, value) {
    var token = this.cookie.get('token');
    var loginId=this.cookie.get('loginId');
    var userId=this.cookie.get('userId');
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json'),
    this.httpHeaders = this.httpHeaders.append('token',   token);
    this.httpHeaders = this.httpHeaders.append('loginId',  loginId );
    this.httpHeaders = this.httpHeaders.append('userId',  userId );
    
    if (key != '' || value != '') {
      this.httpHeaders = this.httpHeaders.append(key, value);
    }
    this.httpOptions = {
      headers: this.httpHeaders
    };

  }
  signInUser(value){
    return this.http.post(Config.loginUrl.concat('login'),value);
  } 

  listAlluser(){
    this.setHeaders('','');
   return this.http.get<User[]>(Config.userApiUrl,this.httpOptions);
  }

  createUser(value){
    return this.http.post(Config.userApiUrl,value,this.httpOptions);
  }
  

  listAnAccount(){
    this.setHeaders('','');
    return this.http.get<User>(Config.userApiUrl.concat(this.userId),this.httpOptions);
  }

  deleteUsere(id){
    return this.http.delete(Config.userApiUrl.concat(id),this.httpOptions)

  }

  editUser(value){
    this.setHeaders('','');
    return this.http.put(Config.userApiUrl.concat("editUser"),value,this.httpOptions);
  }


  
  }

