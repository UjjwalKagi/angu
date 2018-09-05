import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup,FormControl,Validators } from '@angular/forms';
import { CreateCustomerService } from '../../services/create-customer.service';
import { Address } from '../../model/address';
import { Customer } from '../../model/customer';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],

})
export class CustomerFormComponent implements OnInit {
  model = new Customer;
  address=new Address;
  validateEmail = true;
  data: any;
  add: Address[];
  dist: Address[];
  error: boolean = false;
  state:string;
  district:string;
  submitted = false;
  registerForm: FormGroup;
  message:string;
  constructor(private router: Router,private _address:CreateCustomerService) { }

  ngOnInit() {
    
    this.getAllState();
    this.getAllDistrictByState();
    this.getAllState();

  }   
  onSubmit(form: NgForm){
    return this._address.createCustomer(form.value).subscribe(data =>{
       console.log("Credentials",data);
       this.message=data['message'];
       swal(this.message, " " , "success");
       this.router.navigate(['/login']);


     }, error => {
      this.error = true;
      if (error.error['message']) {
        this.message = error.error['message'];
        swal(this.message, " " , "error");
        
      }
      else {
        this.message = error.message;
        swal(this.message, " " , "error");
      }

    });
    }


  getAllState() {
    this._address.listState().subscribe(data => {
      console.log('state', this.data);
      this.add = data;
      console.log("state",  this.add);
    
    },

      error => {
        console.log('item Error', error)
      }

    );
  }

  getAllDistrictByState() {
  
    console.log(this.state)
    this._address.listDistrict(this.state).subscribe(data => {
      console.log('district', this.data);
      this.dist = data;
      console.log("district",  this.dist);

    },

      error => {
        console.log('item Error', error)
      }

    );

  }

  getAllLocalLevelByDistrict() {

  }

}
