import { Component, OnInit } from '@angular/core';
import { Customerorder } from '../../../model/customerorder';
import { OrderService } from '../../../services/order.service';
import { MyitemsService } from '../../../services/myitems.service';
@Component({
  selector: 'app-store-avaliable',
  templateUrl: './store-avaliable.component.html',
  styleUrls: ['./store-avaliable.component.css']
})
export class StoreAvaliableComponent implements OnInit {

  
  data:any;
  order:Customerorder[];
  submitted = false;
  success: boolean = false;
  error: boolean = false;
  message:string;
  constructor(private itemService:MyitemsService) { }

  ngOnInit() {
    this.listAllAvaliableOrderByStore();
  }

  listAllAvaliableOrderByStore() {
    this.itemService.listAllAvaliableOrderByStore().subscribe(data => {

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
    this.itemService.deleteOrder(id).subscribe(data => {
      this.listAllAvaliableOrderByStore();
    },
      error => {
        console.log('Delete Error', error)
      });


}



}
