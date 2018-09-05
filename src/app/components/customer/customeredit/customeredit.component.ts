import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../model/customer';
import { CreateCustomerService } from '../../../services/create-customer.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-customeredit',
  templateUrl: './customeredit.component.html',
  styleUrls: ['./customeredit.component.css']
})
export class CustomereditComponent implements OnInit {

  model=new Customer();
  data:any;
  // user:User;
  submitted = false;
  success: boolean = false;
  error: boolean = false;
  message:string;
  constructor(private customerService:CreateCustomerService,private router: Router) { }

  ngOnInit() {
    this.listAnCustomer()
    this.onSubmit;
  }


  listAnCustomer() {
    this.customerService.listAnAccount().subscribe(data => {

      console.log('Hello', this.data);
      this.data = data;
      this.model=this.data
      console.log('datass', this.model);
    },
      error => {
        console.log('user Error', error)
      });

  }
  onSubmit(form:NgForm){

    return this.customerService.editCustomer(form.value).subscribe(data =>{
      
      this.message=data['messsage'];
      swal(this.message, " " , "success");
      this.router.navigate(['/customer/home']);
    }, error => {
     this.error = true;
     if (error.error['message']) {
       this.message = error.error['message'];
       swal(this.message, " " , "error");
       
     }
     else {
       this.message = error.message;
     }

   }); 

  }

}
