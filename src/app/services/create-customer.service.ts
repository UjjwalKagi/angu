import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Address } from '../model/address';
import { Config } from '../Configuration/config';
import { Customer } from '../model/customer';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class CreateCustomerService {

  customerId:any;
  httpOptions: any;
  httpHeaders: any;
  state:string;
  constructor(private _http: HttpClient,private cookie: CookieService) { 
    this.setHeaders('','');
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


  listState(){
    return this._http.get<Address[]>(Config.stateUrl);
  }

  listDistrict(state){
    return this._http.get<Address[]>(Config.districtUrl.concat('state'));
  }

  listLocalLevel(){
    return this._http.get<Address[]>(Config.itemsUrl);
  }

  createCustomer(value){
    return this._http.post(Config.customerUrl.concat('createCustomer'),value);

}
    listAllCustomer(){
      this.setHeaders('','');
      return this._http.get<Customer[]>(Config.customerUrl.concat('listAll'),this.httpOptions);
    }

    deleteCustomer(id){
      this.setHeaders('','');
      return this._http.delete(Config.customerUrl.concat(id),this.httpOptions)
  
    }

    saveLatitude(Latatude){
      
      console.log("service",Latatude)
      this.setHeaders('','');
      return this._http.put(Config.dAddressUrl.concat(Latatude),this.httpOptions);
    }

    saveLongitude(longitude){
      this.setHeaders('','');
      return this._http.post(Config.dAddressUrl.concat(longitude),this.httpOptions);
    }

    listAnAccount(){
      this.setHeaders('','');
      return this._http.get<Customer>(Config.customerUrl.concat("customer/").concat(this.customerId),this.httpOptions);
    }

    editCustomer(value){
      this.setHeaders('','');
      return this._http.put(Config.customerUrl.concat("editCustomer"),value,this.httpOptions);
    }
  

}
