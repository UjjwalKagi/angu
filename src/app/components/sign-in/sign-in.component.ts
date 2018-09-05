import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../model/delivery';
import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { UserServiceService } from '../../services/user-service.service';
import { AuthenticateService } from '../../services/authenticate.service';
import { CreateCustomerService } from '../../services/create-customer.service';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;
import swal from 'sweetalert2';
import { SiginOutService } from '../../services/sigin-out.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model = new Delivery();
  submitted = false;
  success: boolean = false;
  error: boolean = false;
  message: string;
  id: number;
  role: string;
  latitude: any;
  longitude: any;
  data: any;
  httpOptions: any;
  httpHeaders: any;
  customerId: any;
  storeId: any;
  value: any;
  constructor(private router: Router, private _logout: SiginOutService, private userService: UserServiceService,
    private _authService: AuthenticateService, private cookie: CookieService, private customerService: CreateCustomerService) {

  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
       this.latitude=position.coords.latitude;
       this.longitude=position.coords.longitude;
       console.log("latatude",this.latitude);
       console.log("longitude",this.longitude);
      });
    } else {
     this.message="Geolocation is not supported by this browser.";
    }
   
    this.onSubmit;
  }


  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log("longitude",this.longitude);
    form.controls['latitude'].setValue(this.latitude);
    form.controls['longitude'].setValue(this.longitude);
    console.log(form.value)
    this.userService.signInUser(form.value).subscribe(data => {
      console.log("Credentials", data);
      console.log(data);
      this.success = true;
      this.cookie.set('token', data['token']);
      this._authService.setLoggedIn(true);
      this.cookie.set('loginId', data['loginId']);
      this.cookie.set('loginType', data['loginType']);
      this.role = this.cookie.get('loginType')
      if (this.role == 'ADMIN') {
        this.cookie.set('userId', data['userId'])

        this.router.navigate(['/adminDashboard']);
      } else if (this.role == 'CUSTOMER') {
        this.cookie.set('customerId', data['customerId'])
        this.router.navigate(['/customer']);
      } else {
        this.cookie.set('storeId', data['storeId'])
        this.storeId = data['storeId'];
        this.router.navigate(['/store/home']);
      }

    },
      error => {
        this.error = true;
        this._authService.setLoggedIn(false);
        if (error.error['message']) {
          this.message = error.error['message'];
          swal(this.message, " ", "error");

        }
        else {
          this.message = error.message;
        }
      });
  }

  logout() {
    this._logout.logout().subscribe(data => {
      this.router.navigate(['/login']);
      this.message = data['message'];
      this.cookie.deleteAll
    },
      error => {
        console.log('user Error', error)
      });
  }

//    getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(this.showPosition);
//     } 
// }

// showPosition(position) {
//   this.latitude=position.coords.latitude;
//   this.longitude=position.coords.longitude;    
//   }
  
}






