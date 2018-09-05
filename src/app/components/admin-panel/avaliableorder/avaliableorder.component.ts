import { Component, OnInit } from '@angular/core';
import { Customerorder } from '../../../model/customerorder';
import { OrderService } from '../../../services/order.service';
import { Search } from '../../../model/search';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-avaliableorder',
  templateUrl: './avaliableorder.component.html',
  styleUrls: ['./avaliableorder.component.css']
})
export class AvaliableorderComponent implements OnInit {

  search=new Search();
  data:any;
  order:Customerorder[];
  submitted = false;
  success: boolean = false;
  error: boolean = false;
  message:string;
  constructor(private orderService:OrderService,private router: Router) { 
  }

  ngOnInit() {
    this.listAllAvaliableOrder()
   this.onSubmit 
  }

  onSubmit(form: NgForm){
     this.orderService.searchOrderAvaliable(form.value).subscribe(data =>{
       console.log("Credentials",data);
       this.data = data;
       this.order=this.data;
    
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

 
  listAllAvaliableOrder() {
    this.orderService.listAvaliableOrder().subscribe(data => {

      console.log('order', this.data);
      this.data = data;
      this.order=this.data;
      console.log('order', this.order);
    },
      error => {
        console.log('Order Error', error)
      });

  }

  deleteOrder(id:number){
    this.orderService.deleteOrder(id).subscribe(data => {
      this.listAllAvaliableOrder();
    },
      error => {
        console.log('Delete Error', error)
      });


}


}
