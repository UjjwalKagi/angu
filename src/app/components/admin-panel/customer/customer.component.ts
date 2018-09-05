import { Component, OnInit } from '@angular/core';
import { CreateCustomerService } from '../../../services/create-customer.service';
import { Customer } from '../../../model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  data:any;
  customer:Customer[];
  constructor(private customerService:CreateCustomerService) { }

  ngOnInit() {
    this.listAllCustomer();
  }

  listAllCustomer() {
    this.customerService.listAllCustomer().subscribe(data => {

      console.log('user', this.data);
      this.data = data;
      this.customer=this.data;
      console.log('user', this.customer);
    },
      error => {
        console.log('user Error', error)
      });

  }

  deleteCustomer(id:number){
    this.customerService.deleteCustomer(id).subscribe(data => {
      this.listAllCustomer();
    },
      error => {
        console.log('user Error', error)
      });

  }
   

}
