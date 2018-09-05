import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Config } from '../Configuration/config';
import { Contact } from '../model/contact';
import { HttpClient,HttpResponse ,HttpHeaders} from '@angular/common/http';
@Injectable()
export class ContactService {

  httpOptions: any;
  httpHeaders: any;
  constructor(private http: HttpClient,private cookie: CookieService) {
    this.setHeaders('','')
   }
  

  setHeaders(key, value) {
    var token = this.cookie.get('token');
    var loginId=this.cookie.get('loginId');
    var customerId=this.cookie.get('userId');
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders = this.httpHeaders.append('Content-Type', 'application/json'),
    this.httpHeaders = this.httpHeaders.append('token',   token);
    this.httpHeaders = this.httpHeaders.append('loginId',  loginId );
    this.httpHeaders = this.httpHeaders.append('userId',  customerId );
    
    if (key != '' || value != '') {
      this.httpHeaders = this.httpHeaders.append(key, value);
    }
    this.httpOptions = {
      headers: this.httpHeaders
    };

  }


  saveContact(value){
    return this.http.post(Config.contactUrl.concat('createContact'),value);
  }

  listAllContact(){
    this.setHeaders('','')
    return this.http.get<Contact[]>(Config.contactUrl.concat('listAllContact'),this.httpOptions);
  }


  deleteContact(id){
    this.setHeaders('','')
    return this.http.delete(Config.contactUrl.concat(id),this.httpOptions)
  }
  


}
